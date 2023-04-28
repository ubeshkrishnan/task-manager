const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const mysql = require("mysql2");
const app = express();
const bcrypt = require('bcrypt');
const compression = require('compression');

const db = require("../Sql/db")

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(compression());



// Insert
app.post("/insert", (req, res) => {
  console.log(req.body);
  const fullname = req.body.fullname + " " + req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  const sqlInsert =
    "INSERT INTO sign_in(fullname, email, password,confirmpassword) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [fullname, email, password, confirmpassword],
    (err, result) => {
      if (err) throw err;
    }
  );
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE user_email = '${email}' AND password = '${password}'`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error occurred" });
    } else if (result.length === 0) {
      res.status(401).send({ message: "Invalid username or password" });
    } else {
      console.log("ddddddddddd", result);
      const user = result[0];
      const roleSet = user.role || "";
      res
        .status(200)
        .send({ message: "Login successful", user, role: roleSet });
    }
  });
});

// Login History  Save
app.post("/history", (req, res) => {
  console.log(req.body);
  // const { ipAddress, username, password, attemptCount, badAttempt, message } = req.body;
  const ip_address = req.body.ip_address;

  const email = req.body.email;
  const password = req.body.password;
  const attempt_count = req.body.attempt_count;
  const bad_attempt = req.body.bad_attempt;
  const message = req.body.message;

  // Hash the password using bcrypt
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password: " + err.stack);
      res.status(500).send({ error: "Error hashing password" });
      return;
    }

    // Insert the login history into the database

    const loginHistory =
      "INSERT INTO login_history (ip_address, email, password, attempt_count, bad_attempt, message,created_date,updated_date) VALUES (?, ?, ?, ?, ?, ?,NOW(),NOW())";
    db.query(
      loginHistory,
      [ip_address, email, hashedPassword, attempt_count, bad_attempt, message],
      (error, results) => {
        if (error) {
          console.error("Error inserting data into database: " + error.stack);
          res.status(500).send({ error: "Error inserting data into database" });
          return;
        }
        res.send({ message: "Login history stored successfully" });
      }
    );
  });
});

// User History
app.post("/user_loginHistory", (req, res) => {
  console.log(req.body);
  // const { ipAddress, username, password, attemptCount, badAttempt, message } = req.body;
  const ip_address = req.body.ip_address;

  const email = req.body.email;
  const password = req.body.password;
  const attempt_count = req.body.attempt_count;
  const bad_attempt = req.body.bad_attempt;
  const message = req.body.message;

  // Users Hash the password using bcrypt
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password: " + err.stack);
      res.status(500).send({ error: "Error hashing password" });
      return;
    }

    // Insert the login history into the database

    const loginHistory =
      "INSERT INTO login_history (ip_address, email, password, attempt_count, bad_attempt, message,created_date,updated_date) VALUES (?, ?, ?, ?, ?, ?,NOW(),NOW())";
    db.query(
      loginHistory,
      [ip_address, email, hashedPassword, attempt_count, bad_attempt, message],
      (error, results) => {
        if (error) {
          console.error("Error inserting data into database: " + error.stack);
          res.status(500).send({ error: "Error inserting data into database" });
          return;
        }
        res.send({ message: "Login history stored successfully" });
      }
    );
  });
});

// Users Login
app.post("/user_login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM sign_in WHERE email = '${email}' AND password = '${password}'`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error occurred" });
    } else if (result.length === 0) {
      res.status(401).send({ message: "Invalid username or password" });
    } else {
      const user = result[0];
      // generate an access token or session cookie here
      res.status(200).send({ message: "Login successful", user });
    }
  });
});




module.exports = app;
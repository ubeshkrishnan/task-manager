const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const mysql = require("mysql2");
const app = express();
const bcrypt = require('bcrypt');
const compression = require('compression');
const router = express.Router();
const jwt = require("jsonwebtoken");

const nodemailer = require("nodemailer");
require('dotenv').config()
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
  const sql = "SELECT * FROM users WHERE user_email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
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
  const sql = `SELECT * FROM sign_in WHERE email = ?`;
  db.query(sql, [email], async (err, result) => {
    if (err) {
      res.status(500).send({ message: "Error occurred" });
    } else if (result.length === 0) {
      res.status(401).send({ message: "Invalid username or password" });
    } else {
      const user = result[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.status(401).send({ message: "Invalid username or password" });
      } else {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).send({ message: "Login successful", user, token });
      }
    }
  });
});

// Forgot password
app.post('/forgot_password', (req, res) => {
  const { email } = req.body;

  // Check if email exists in database
  const checkEmailQuery = `SELECT * FROM users WHERE user_email = '${email}'`;
  db.query(checkEmailQuery, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error checking email');
    } else if (result.length === 0) {
      res.status(404).send('User not found');
    } else {
      // Generate verification token
      const token = Math.floor(Math.random() * 1000000);

      // Save the token in the database
      const updateTokenQuery = `UPDATE users SET reset_password_token = ${token}, reset_password_expires = DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE user_email = '${email}'`;

      db.query(updateTokenQuery, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Failed to save token');
        } else {
          // Send verification email
          const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.GMAIL_USERNAME,
              pass: process.env.GMAIL_PASSWORD,
            },
          });
          
          const mailOptions = {
            from: '<noreply@yourapp.com>',
            to: email,
            subject: 'Password Reset Verification Code',
            text: `Verification code: ${token}`,
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.error(err);
              res.status(500).send('Failed to send email');
            } else {
              res.send('Verification email sent!');
            }
          });
        }
      });
    }
  });
});



module.exports = app;
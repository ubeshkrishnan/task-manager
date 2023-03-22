const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const fileupload = require("express-fileupload");
const multer = require("multer");
const upload = multer({
  dest: "./uploads/ ",
});

const db = mysql.createPool({
  host: "192.168.130.20",
  user: "root",
  password: "Thirukumaran6",
  database: "dbtask_manager",
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Image

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

app.post("/login", (req, res) => {
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

// Users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM client_master", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

//get the id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query(
    "SELECT * FROM client_master WHERE client_id = ?",
    [id],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results[0]); // assuming id is unique, return only the first result
    }
  );
});

// INSERTING A CLIENT
app.post("/client", upload.single("profileImage"), (req, res) => {
  // Extract data from the request body and file
  const profileImage = req.file.filename; // Use filename instead of file object
  const {
    client_name,
    client_shortcode,
    vertical_id,
    owner_name,
    owner_phone,
    owner_email,
    accounts_contact,
    accounts_phone,
    accounts_email,
    gst_no,
    address_line_1,
    address_line_2,
    city,
    state,
    pin_code,
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
    INSERT INTO client_master (
      profileImage,
      client_name,
      client_shortcode,
      vertical_id,
      owner_name,
      owner_phone,
      owner_email,
      accounts_contact,
      accounts_phone,
      accounts_email,
      gst_no,
      address_line_1,
      address_line_2,
      city,
      state,
      pin_code
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  // Execute the query with the extracted data
  db.query(
    query,
    [
      profileImage,
      client_name,
      client_shortcode,
      vertical_id,
      owner_name,
      owner_phone,
      owner_email,
      accounts_contact,
      accounts_phone,
      accounts_email,
      gst_no,
      address_line_1,
      address_line_2,
      city,
      state,
      pin_code,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error inserting data into the database");
      } else {
        res.status(200).send("Data inserted successfully");
      }
    }
  );
});

app.put("/update/:id", (req, res) => {
  // Extract the client ID from the request URL
  const clientId = req.params.id;

  // Extract the updated values from the request body
  const updatedClient = req.body;
  console.log(updatedClient);

  // Update the client record in the database using SQL query
  const query = `UPDATE client_master SET client_name='${updatedClient.client_name}', client_shortcode='${updatedClient.client_shortcode}', vertical_id='${updatedClient.vertical_id}', owner_name='${updatedClient.owner_name}', owner_phone='${updatedClient.owner_phone}', owner_email='${updatedClient.owner_email}', accounts_contact='${updatedClient.accounts_contact}', accounts_phone='${updatedClient.accounts_phone}', accounts_email='${updatedClient.accounts_email}', gst_no='${updatedClient.gst_no}', address_line_1='${updatedClient.address_line_1}', address_line_2='${updatedClient.address_line_2}', city='${updatedClient.city}' ,state ='${updatedClient.state}',pin_code='${updatedClient.pin_code}' WHERE client_id=${clientId}`;

  db.query(query, (error, results, fields) => {
    if (error) {
      // Handle the database error
      console.log(error);
      res.status(500).send("Failed to update client record");
    } else {
      // Send the success response back to the client
      res.status(200).send("Client record updated successfully");
    }
  });
});

// endpoint to handle DELETE request
app.delete("/api/clients/:id", (req, res) => {
  const { id } = req.params;

  // Delete client from MySQL
  const sql = `DELETE FROM client_master WHERE client_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting client from database");
    } else if (result.affectedRows === 0) {
      res.status(404).send(`Client with ID ${id} not found`);
    } else {
      res.send(`Client with ID ${id} deleted successfully!`);
    }
  });
});

// INSERTING THE MEMBER
app.post("/member", (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
    userId,
    userGroup,
    firstname,
    lastname,
    email,
    designation,
    phone,
    password,
    address,
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO users (
        user_role_id,
        user_group_id,
        first_name,
        last_name,
        user_email,
        designation,
        phone,
        password,
        address
          
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;
  // Execute the query with the extracted data
  db.query(
    query,
    [
      userId,
      userGroup,
      firstname,
      lastname,
      email,
      designation,
      phone,
      password,
      address,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error inserting data into the database");
      } else {
        res.status(200).send("Data inserted successfully");
      }
    }
  );
});

app.get("/getmembers", (req, res) => {
  db.query("SELECT * FROM users", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

//get the id
app.get("/getmembers/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.query(
    "SELECT * FROM users WHERE user_id = ?",
    [id],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results[0]); // assuming id is unique, return only the first result
    }
  );
});

app.put("/memberupdate/:id", (req, res) => {
  // Extract the client ID from the request URL
  const userId = req.params.id;

  // Extract the updated values from the request body
  const updatedMember = req.body;
  console.log(updatedMember);

  // Update the client record in the database using SQL query
  const query = `UPDATE users SET user_role_id='${updatedMember.user_role_id}', user_group_id='${updatedMember.user_group_id}', first_name='${updatedMember.first_name}', last_name='${updatedMember.last_name}', user_email='${updatedMember.user_email}', designation='${updatedMember.designation}', phone='${updatedMember.phone}', address='${updatedMember.address}',password='${updatedMember.password}'  WHERE user_id=${userId}`;

  db.query(query, (error, results, fields) => {
    if (error) {
      // Handle the database error
      console.log(error);
      res.status(500).send("Failed to update member record");
    } else {
      // Send the success response back to the client
      res.status(200).send("Member record updated successfully");
    }

    // IMGE upload
  });
});

// Task Insert
app.post("/task", (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
    task_name,
    client,
    control_code,
    category,
    start_date,
    end_date,
    task_assignperson,
    deadline,
    description,
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO task (
      
       task_name,
       client,
       control_code,
        category,
       start_date,
       end_date,
      task_assignperson,
        deadline,
        description  
      ) VALUES (?, ?, ?, ?, ?, ?, ?,?,?);
  `;
  // Execute the query with the extracted data
  db.query(
    query,
    [
      task_name,
      client,
      control_code,
      category,
      start_date,
      end_date,
      task_assignperson,
      deadline,
      description,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error inserting data into the database");
      } else {
        res.status(200).send("Data inserted successfully");
      }
    }
  );
});

// Task card Map
app.get("/taskcard", (req, res) => {
  db.query("SELECT * FROM task", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});
app.delete("/delete_experience/:id", (req, res) => {
  const { id } = req.params;
  db.query("delete from task where id=?", [id], (err, result) => {
    res.send(result);
  });
});

app.put("/update_experience", (req, res) => {
  const {
    task_name,
    client,
    control_code,
    category,
    start_date,
    end_date,
    task_assignperson,
    deadline,
    description,
    status,
    comments,
    id,
  } = req.body;

  db.query(
    "update task set task_name=?, client=?, control_code=?, category=?, start_date=?, end_date=?, task_assignperson=?, deadline=?, description=?, status=?, comments=? where id=?",
    [
      task_name,
      client,
      control_code,
      category,
      start_date,
      end_date,
      task_assignperson,
      deadline,
      description,
      status,
      comments,
      id,
    ],
    (error, result) => {
      if (result) {
        let s = { status: "Updated" };
        res.send(s);
      } else {
        console.log(error);
      }
    }
  );
});
app.put("/task_status_update", (req, res) => {
  const { status, id } = req.body;

  db.query(
    "UPDATE task SET status = ? WHERE id = ?",
    [status, id],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        let s = { status: "updated" };
        res.send(s);
      }
    }
  );
});

// Task filter
app.get("/task_filter", (req, res) => {
  const filter = req.query.filter;
  let query = "";

  if (filter === "All") {
    query = "SELECT * FROM task";
  } else {
    query = `SELECT * FROM task WHERE status='${filter}'`;
  }

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Task Count
app.get("/task_filter", (req, res) => {
  const filter = req.query.filter;
  const query = `SELECT COUNT(*) AS incomplete FROM tasks WHERE status != 'completed' AND category = '${filter}'`;
  db.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

// Project
// project inserting
app.post("/project", (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
    project_name,
    category,
    client,
    duration,
    start_date,
    end_date,
    task_assignto,
    project_manager,
    deadline,
    status,
    date,
    priority,
    description,
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
  INSERT INTO project (
    project_name,
    category,
    client,
    duration,
    start_date,
    end_date,
    task_assignto,
    project_manager,
    deadline,
    status,
    date,
    priority,
    description
  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);
`;
  // Execute the query with the extracted data
  db.query(
    query,
    [
      project_name,
      category,
      client,
      duration,
      start_date,
      end_date,
      task_assignto,
      project_manager,
      deadline,
      status,
      date,
      priority,
      description,
    ],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error inserting data into the database");
      } else {
        res.status(200).send("Data inserted successfully");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server is connected");
});

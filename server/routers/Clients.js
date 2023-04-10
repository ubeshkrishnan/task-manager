const express =require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const compression =require("compression")
// const fileupload = require('express-fileupload');

const db= require('../Sql/db')
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
const multer = require("multer");
const upload = multer({
  dest: "./public/uploads/ ",
});





// Mapping for client card 
// // Users Login
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

// Fetch User details for clients
app.get("/users", (req, res) => {
  db.query(
    "SELECT *,profileImage FROM client_master",
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

//get the id Clients separete ID
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
      profileImage,  -- Change column name from filename to profileImage
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

// Imge
app.get("/Viewfile/:uploads", (req, res) => {
  const { filename } = req.params;
  res.sendFile(__dirname + "/uploads/" + filename);
});

app.get("/Viewfile", (request, response) => {
  let sql = "select * from profileImage";
  db.query(sql, (error, result) => {
    response.send(result);
  });
});

// Update client Record
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

// endpoint to handle DELETE requestto dlete clients
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


module.exports = app;
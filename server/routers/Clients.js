const express =require("express");
const bodyparser = require("body-parser");
var cors = require("cors");
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const fileupload = require('express-fileupload');

const db= require('../Sql/db')

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));






// Mapping for client card 
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
  db.query("SELECT * FROM client_master WHERE client_id = ?", [id], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]); // assuming id is unique, return only the first result
  });
});


// INSERTING A CLIENT

app.post('/client', (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
      clientname,
      clientshortcode,
      verticalid,
      ownername,
      ownerphone,
      owneremail,
      accountscontact,
      accountsphone,
      accountsemail,
      // profileimage,
      gstnumber,
      address1,
      address2,
      city,
      state,
      pincode
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO client_master (
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
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;
    // Execute the query with the extracted data
    db.query(query, [
      clientname,
      clientshortcode,
      verticalid,
      ownername,
      ownerphone,
      owneremail,
      accountscontact,
      accountsphone,
      accountsemail,
      // profileimage,
      gstnumber,
      address1,
      address2,
      city,
      state,
      pincode
  ], (error, results, fields) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error inserting data into the database');
      } else {
          res.status(200).send('Data inserted successfully');
      }
  });
})

app.put('/update/:id', (req, res) => {
  // Extract the client ID from the request URL
  const clientId = req.params.id;

  // Extract the updated values from the request body
  const updatedClient = req.body;
  console.log(updatedClient);

  // Update the client record in the database using SQL query
  const query = `UPDATE client_master SET client_name='${updatedClient.client_name}', client_shortcode='${updatedClient.client_shortcode}', vertical_id='${updatedClient.vertical_id}', owner_name='${updatedClient.owner_name}', owner_phone='${updatedClient.owner_phone}', owner_email='${updatedClient.owner_email}', accounts_contact='${updatedClient.accounts_contact}', accounts_phone='${updatedClient.accounts_phone}', accounts_email='${updatedClient.accounts_email}', gst_no='${updatedClient.gst_no}', address_line_1='${updatedClient.address_line_1}', address_line_2='${updatedClient.address_line_2}', city='${updatedClient.city}' ,state ='${updatedClient.state}',pin_code='${updatedClient.pin_code}' WHERE client_id=${(clientId)}`;
  
  db.query(query, (error, results, fields) => {
    if (error) {
      // Handle the database error
      console.log(error);
      res.status(500).send('Failed to update client record');
    } else {
      // Send the success response back to the client
      res.status(200).send('Client record updated successfully');
    }
  });
})

// Endpoint to handle DELETE request
app.delete('/api/clients/:id', (req, res) => {
  const { id } = req.params;

  // Delete client from MySQL
  const sql = `DELETE FROM client_master WHERE client_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting client from database');
    } else if (result.affectedRows === 0) {
      res.status(404).send(`Client with ID ${id} not found`);
    } else {
      res.send(`Client with ID ${id} deleted successfully!`);
    }
  });
});

module.exports = app;
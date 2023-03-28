const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');

const fileupload = require('express-fileupload');

const db= require("../Sql/db")

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));










// INSERTING THE MEMBER
app.post('/member', (req, res) => {
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
      db.query(query, [
        userId,
        userGroup,
        firstname,
        lastname,
        email,
        designation,
        phone,
        password,
        address
       
    ], (error, results, fields) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error inserting data into the database');
        } else {
            res.status(200).send('Data inserted successfully');
        }
    });
  })
  
  app.get('/getmembers', (req, res) => {
  
    db.query("SELECT * FROM users", (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
  
  //get the id
  app.get("/getmembers/:id", (req, res) => {
   
    const id = req.params.id;
    console.log(id);
    db.query("SELECT * FROM users WHERE user_id = ?", [id], (error, results, fields) => {
      if (error) throw error;
      res.send(results[0]); // assuming id is unique, return only the first result
    });
  });
  
  
  
  app.put('/memberupdate/:id', (req, res) => {
    // Extract the client ID from the request URL
    const userId = req.params.id;
  
    // Extract the updated values from the request body
    const updatedMember = req.body;
    console.log(updatedMember);
  
    // Update the client record in the database using SQL query
    const query = `UPDATE users SET user_role_id='${updatedMember.user_role_id}', user_group_id='${updatedMember.user_group_id}', first_name='${updatedMember.first_name}', last_name='${updatedMember.last_name}', user_email='${updatedMember.user_email}', designation='${updatedMember.designation}', phone='${updatedMember.phone}', address='${updatedMember.address}',password='${updatedMember.password}'  WHERE user_id=${(userId)}`;
    
    db.query(query, (error, results, fields) => {
      if (error) {
        // Handle the database error
        console.log(error);
        res.status(500).send('Failed to update member record');
      } else {
        // Send the success response back to the client
        res.status(200).send('Member record updated successfully');
      }
    });
})

module.exports = app;
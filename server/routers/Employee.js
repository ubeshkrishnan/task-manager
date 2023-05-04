const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const compression = require("compression")
const fileupload = require('express-fileupload');

const db= require("../Sql/db")

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(compression());




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

// Fetch member ID separate
app.get("/getmembers", (req, res) => {
  db.query("SELECT * FROM users", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get("/getmembername", (req, res) => {
  const user_id = req.query.user_id;
  db.query(
    "SELECT * FROM users WHERE user_id = ?",
    [user_id],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

//get the id of Members
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

// Members Update
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

//getting rolesid
app.get('/roles', (req, res) => {

  db.query("SELECT * FROM user_roles", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

//getting groupid
app.get('/groups', (req, res) => {
  db.query("SELECT * FROM user_groups", (error, results, fields) => {
    if(error) throw error;
    res.send(results);
  });
});

// define a DELETE route for deleting a member

// Attendance
app.post('/punch', async (req, res) => {
  const { punchOutTime, workHours } = req.body;
  const query = `UPDATE punchin_punchout SET punchout_time = NOW(), work_hours = ? WHERE punchout_time IS NULL`;
// Execute the query with the extracted data
db.query(query, [workHours], (error, results, fields) => {
  if (error) {
      console.log(error);
      res.status(500).send('Error updating data in the database');
  } else {
      res.status(200).send('Data updated successfully');
  }
});
})

app.delete('/delete_member/:id', (req, res) => {
  const { id } = req.params;

  // Delete client from MySQL
  const sql = `DELETE FROM users WHERE user_id = ?`;
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

// Leave Request
//CHANGING THE LEAVES FROM ADMIN TO MYSQL 
app.put('/api/leaves/:id', (req, res) => {
  const id = req.params.id;
  const action = req.body.action;

  const sql = `UPDATE leaves SET action = ? WHERE id = ?`;
  const values = [action, id];

  db.query(sql, values, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to update leave request' });
    } else {
      res.status(200).json({ message: 'Leave request updated successfully' });
    }
  });
});

//All the employees leave data for the admin
app.get("/leavecard", (req, res) => {
  // db.query("SELECT * FROM task", (error, results, fields) => {
    db.query("SELECT * FROM leaves", (error, results, fields) => {  
      if (error) throw error;
    // console.log(results);
    res.send(results);
  });
});


//Leave Request

app.post('/leave', (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
      emp_id,
      emp_name,
      leave_type,
      from_date,
      to_date,
      reason,
     
      
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO leaves (
        emp_id,
        emp_name,
        leave_type,
        from_date,
        to_date,
        reason
          
      ) VALUES (?, ?, ?, ?, ?, ?);
  `;
    // Execute the query with the extracted data
    db.query(query, [
      emp_id,
      emp_name,
      leave_type,
      from_date,
      to_date,
      reason
     
  ], (error, results, fields) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error inserting data into the database');
      } else {
          res.status(200).send('Data inserted successfully');
      }
  });
})


//Getting the that which user logged in that users data's
app.get("/getleave/:userId", async (req, res) => {
  const { userId } = req.params;
  const query = `SELECT * from leaves where emp_id = ${userId}`;
  db.query(query, (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = app;
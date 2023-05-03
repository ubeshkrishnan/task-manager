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


// Middleware for parsing JSON data
app.use(express.json());

// API endpoint for creating a new record
app.post('/ticket_view', (req, res) => {
  const { subject, assign_name, created_date, status } = req.body;
  const sql = `INSERT INTO ticket_view (subject, assign_name, created_date, status) VALUES ('${subject}', '${assign_name}', '${created_date}', '${status}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


// API endpoint for reading all records
app.get('/getticket', (req, res) => {
  const sql = "SELECT * from ticket_view";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});


// API endpoint for updating a record
app.put('/records/:id', (req, res) => {
  const { subject, assign_name, created_date, status } = req.body;
  const sql = `UPDATE mytable SET subject='${subject}', assign_name='${assign_name}', created_date='${created_date}', status='${status}' WHERE id=${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// API endpoint for deleting a record
app.delete('/records/:id', (req, res) => {
  const sql = `DELETE FROM mytable WHERE id=${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});




module.exports = app;
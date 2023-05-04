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


// Update ticket by ID
app.put('/ticket_update :id', async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
    res.json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete ticket by ID
app.delete("/ticket_delete/:id", (req, res) => {
  const { id } = req.params;
  db.query("delete from project where id=?", [id], (err, result) => {
    res.send(result);
  });
});

module.exports = app;
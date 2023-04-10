const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const fileupload = require('express-fileupload');
const db= require("../Sql/db")
const compression = require("compression");

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(compression());

// Task assign to
app.get("/gettask/:userId", async (req, res) => {
    const { userId } = req.params;
    const query = `SELECT * from task where assignto = ${userId}`;
    db.query(query, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else {
        res.status(200).send(results);
      }
    });
  });


  
  // Task filter
  app.get("/taskemp_filter/:userId", (req, res) => {
    const userId = req.params.userId;
    const filter = req.query.filter;
    let query = "";
    if (filter === "All") {
      query = `SELECT * FROM task WHERE assignto=${userId}`;
    } else {
      query = `SELECT * FROM task WHERE status='${filter}' AND assignto=${userId}`;
    }
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Task Count
  app.get("/taskemp_count/:userId", (req, res) => {
    const userId = req.params.userId;
    const filter = req.query.filter;
    const query = `SELECT COUNT(*) AS incomplete FROM tasks WHERE status != 'completed' AND category = '${filter}' AND assignto=${userId}`;
    db.query(query, (error, results, fields) => {
      if (error) throw error;
      res.send(results[0]);
    });
  });
  

module.exports = app;
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


  app.get('/task_empfilters', (req, res) => {
    
    const filter = req.query.filter;
    console.log(filter);
    const user_id = req.query.user_id; // Assuming user is available in the request object after authentication
    console.log(user_id);
    let query = '';
    
    if (filter === 'All') {
      query = `SELECT * FROM task WHERE assignto='${user_id}'`;
    } else {
      query = `SELECT * FROM task WHERE status='${filter}' AND assignto='${user_id}'`;
    }
  
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Task Count

  app.get("/task_empfilters", (req, res) => {
   
    const filter = req.query.filter;
    const user_id = req.user_id; // Assuming user is available in the request object after authentication

    let query = '';
  
    if (filter === 'All') {
      query = `SELECT COUNT AS incomplete FROM task WHERE category = '${filter}' AND assignto='${user_id}'`;
    } else {
      query = `SELECT COUNT AS incomplete FROM task WHERE status != 'completed' AND category = '${filter}' AND assignto='${user_id}'`;
    }
  
    db.query(query, (error, results, fields) => {
      if (error) throw error;
      res.send(results[0]);
    });
  });

module.exports = app;
const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const fileupload = require('express-fileupload');
const db= require("../Sql/db")
const compression = require("compression")


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(compression());


 // Task Insert
 app.post('/task', (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
     
      task_name,
      client,
      control_code,
      category,
      // start_date,
      // end_date,
      
      task_assignperson,
      deadline,
      description,
     
     
      
  } = req.body;
  const categoryString = Array.isArray(category) ? category.join(',') : '';



  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO task (
      
       task_name,
       client,
       control_code,
      category,
      task_assignperson,
        deadline,
        description
        
      ) VALUES (?, ?, ?, ?, ?, ?, ?);
  `;
    // Execute the query with the extracted data
    db.query(query, [

      task_name,
      client,
      control_code,
      categoryString,
      // start_date,
      // end_date,
      // project_manager,
      task_assignperson,
      deadline,
      description,
     
     
  ], (error, results, fields) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error inserting data into the database');
      } else {
          res.status(200).send('Data inserted successfully');
      }
  });
})
  // Task card Map
  app.get("/taskcard", (req, res) => {
    // db.query("SELECT * FROM task", (error, results, fields) => {
    db.query(
      "SELECT *, DATE_FORMAT(deadline, '%d-%m-%y') AS formatted_deadline FROM task",
      (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        res.send(results);
      }
    );
  });
  
  // Delete tasks By id in Admin
  app.delete("/delete_experience/:id", (req, res) => {
    const { id } = req.params;
    db.query("delete from task where id=?", [id], (err, result) => {
      res.send(result);
    });
  });
  
  // update Task by id
  app.put("/update_experience", (req, res) => {
    const {
      task_name,
      client,
      control_code,
      assignto,
      category,
      task_assignperson,
      deadline,
      duration,
      description,
      status,
      comments,
      id,
    } = req.body;
    // Convert duration to number of seconds
    const durationInSeconds = duration
      ? duration.split(":").reduce((acc, time) => 60 * acc + +time)
      : null;
  
    db.query(
      "update task set task_name=?, client=?, control_code=?, assignto=?, category=?, task_assignperson=?, deadline=?, duration=?, description=?, status=?, comments=? where id=?",
      [
        task_name,
        client,
        control_code,
        assignto,
        category,
        task_assignperson,
        deadline,
        duration,
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
  
  // Api cal  for status Update
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


app.get('/worktype_task', (req, res) => {
  db.query("SELECT * FROM worktype_task", (error, results, fields) => {
    if(error) throw error;
    res.send(results);
  });
});

app.get('/worktype_project', (req, res) => {
  db.query("SELECT * FROM worktype_project", (error, results, fields) => {
    if(error) throw error;
    res.send(results);
  });
});


module.exports = app;
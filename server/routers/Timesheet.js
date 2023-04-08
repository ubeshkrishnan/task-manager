const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const db= require("../Sql/db")

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));



// Weekly Time sheet
app.post('/timesheet', (req, res) => {
    const { project, task, day, hours } = req.body;
    const query = `INSERT INTO timesheet (project, task, day, hours) VALUES (${project}, ${task}, ${day}, ${hours})`;
  
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error adding entry to timesheet');
      } else {
        res.status(200).send('Entry added to timesheet successfully');
      }
    });
  });
  
  
  // const tasks = [
  //   { task_id: 1, project_name: 'Project 1', task_name: 'Task 1', hours: 3 },
  //   { task_id: 2, project_name: 'Project 2', task_name: 'Task 2', hours: 5 },
  //   { task_id: 3, project_name: 'Project 1', task_name: 'Task 3', hours: 2 },
  //   { task_id: 4, project_name: 'Project 3', task_name: 'Task 4', hours: 4 },
  //   { task_id: 5, project_name: 'Project 2', task_name: 'Task 5', hours: 1 },
  // ];
  
  app.get('/gettask_time/:userId', (req, res) => {
    const userId = req.params.userId;
  
    const userTasks = tasks.filter((task) => {
      return task.user_id == userId;
    });
  
    res.send(userTasks);
  });
  
  // Time sheet
app.get('/project',(req,res)=>{
  db.query('SELECT * FROM project',(error,results,fields)=>{
    if(error) throw error;
    res.send(results);
  });
});


module.exports = app;
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

app.post("/project", (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
    project_name,
    created_dt,
    category,
    client,
    duration,
    start_date,
    end_date,
    project_manager,
    deadline,
    status,
    date,
    priority,
    description,
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
  INSERT INTO project (
    project_name,
    created_dt,
    category,
    client,
    duration,
    start_date,
    end_date,
    project_manager,
    deadline,
    status,
    date,
    priority,
    description
  ) VALUES (?,NOW(),?,?,?,?,?,?,?,?,?,?,?);
`;
  // Execute the query with the extracted data
  db.query(
    query,
    [
      project_name,
      created_dt,
      category,
      client,
      duration,
      start_date,
      end_date,
      project_manager,
      deadline,
      status,
      date,
      priority,
      description,
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

// Project card Map
app.get("/projectcard", (req, res) => {
  // db.query("SELECT * FROM project", (error, results, fields) => {
  db.query(
    "SELECT *, DATE_FORMAT(deadline, '%d-%m-%y') AS formatted_deadline FROM project",
    (error, results, fields) => {
      if (error) throw error;
      console.log(results);
      res.send(results);
    }
  );
});

// Delete project by ID

app.delete("/delete_project/:id", (req, res) => {
  const { id } = req.params;
  db.query("delete from project where id=?", [id], (err, result) => {
    res.send(result);
  });
});

// Get the time value from the React form input
// const timeValue = e.target.elements.ftime.value;

// update project By ID
// app.put("/update_project", (req, res) => {
//   const {
//     id,
//     project_name,
//     category,
//     client,
//     duration,
//     start_date,
//     end_date,
//     project_manager,
//     status,
//     date,
    
//   } = req.body;
//   // Convert duration to number of seconds
//   const durationInSeconds = duration
//     ? duration.split(":").reduce((acc, time) => 60 * acc + +time)
//     : null;

//   db.query(
//     "update project set project_name=?, category=?, client=?, category=?, duration=?, start_date=?, end_date=?, project_manager=?, status=?, date=? where id=?",
//     [
//       id,
//       project_name,
//       category,
//       client,
//       duration,
//       start_date,
//       end_date,
//       project_manager,
//       status,
//       date,
     
//     ],
//     (error, result) => {
//       if (result) {
//         let s = { status: "Updated" };
//         res.send(s);
//       } else {
//         console.log(error);
//       }
//     }
//   );
// });

app.put('/projectupdate/:id', (req, res) => {
  // Extract the client ID from the request URL
  const id = req.params.id;

  // Extract the updated values from the request body
  const updatedProject = req.body;
  console.log(updatedProject);

  // Update the client record in the database using SQL query
  const query = `UPDATE project SET project_name='${updatedProject.project_name}'  WHERE id=${(id)}`;
  
  db.query(query, (error, results, fields) => {
    if (error) {
      // Handle the database error
      console.log(error);
      res.status(500).send('Failed to update project record');
    } else {
      // Send the success response back to the client
      res.status(200).send('project record updated successfully');
    }
  });
})



// Update for  Project Status

app.put("/project_status_update", (req, res) => {
  const { status, id } = req.body;

  db.query(
    "UPDATE project SET status = ? WHERE id = ?",
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

// project filter
app.get("/project_filter", (req, res) => {
  const filter = req.query.filter;
  let query = "";

  if (filter === "All") {
    query = "SELECT * FROM project";
  } else {
    query = `SELECT * FROM project WHERE status='${filter}'`;
  }

  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// project Count
app.get("/project_filter", (req, res) => {
  const filter = req.query.filter;
  const query = `SELECT COUNT(*) AS incomplete FROM project WHERE status != 'completed' AND category = '${filter}'`;
  db.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});


app.get('/getproject', (req, res) => {

  db.query("SELECT * FROM project", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});
module.exports = app;
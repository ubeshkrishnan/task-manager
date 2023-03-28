const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
// const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbtask_manager",
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Tickets
app.post("/insert", (req, res) => {
  console.log(req.body);
  const subject = req.body.subject;
  const assignname = req.body.assignname;
  const date = req.body.date;
  const status = req.body.status;

  const sqlInsert =
    "INSERT INTO ticket_view(subject,assignname,date,status) VALUES (?,?,?,?)";
  db.query(sqlInsert, [subject, assignname, date, status], (err, result) => {
    if (err) throw err;
  });
});
// List all Tickets

// List all tickets
app.get("/api/tickets", (req, res) => {
  const query = "SELECT * FROM ticket";
  pool.query(query, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

// Update a ticket
app.put("/api/tickets/:id", (req, res) => {
  const { subject, assign_name, created_date, status } = req.body;
  const query =
    "UPDATE ticket SET subject=?, assign_name=?, created_date=?, status=? WHERE id=?";
  pool.query(
    query,
    [subject, assign_name, created_date, status, req.params.id],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: "Ticket not found" });
      } else {
        res.json({ message: "Ticket updated successfully" });
      }
    }
  );
});

app.listen(3005, () => {
  console.log("server is connected");
});

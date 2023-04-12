const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const compression =require("compression");
const path = require('path')
const _dirname = path.dirname("")
const buildpath = path.join(_dirname , "../client/build");

app.use(express.static(buildpath))
app.get("/*", function(req,res){
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function  (err){
      if(err){
        res.status(500).send(err)
      }
    }
  )
})


app.use(cors());
const db = require("./Sql/db");
app.use(compression());
// db.connect(function (err) {
//   if (err) {
//   console.log(err);
//   } else {
//   console.log("MySql Connected");
//   }
//   });

const Clients = require("./routers/Clients");
const Employee = require("./routers/Employee");
const Login = require("./routers/Login");
const Project = require("./routers/Project");
const Task = require("./routers/Task");
const Ticket = require("./routers/Ticket");
const Timesheet = require("./routers/Timesheet");
const Taskemp = require("./routers/Taskemp");

app.use(cors({
  origin: 'http://localhost:3001'
}));


app.use( Clients);
app.use(Employee);
app.use(Login);
app.use(Project);
app.use( Task);
app.use( Ticket);
app.use( Timesheet);
app.use( Taskemp);

app.listen(5005, () => {
  console.log("Server Is Running At Port Number 5005");
});

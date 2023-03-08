// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const app = express();
// const mysql = require("mysql2");
// const bcrypt = require("bcrypt");
// app.use(cors());
// const db = require("./Sql/db");

// // db.cr(function (err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("MySql Connected");
// //   }
// // });

// const Clients = require("./routers/Clients");
// const Login = require("./routers/Login");
// const Tickets = require("./routers/Tickets");
// const Employee = require("./routers/Employee");

// app.use(cors({
//   origin: 'http://localhost:3001'
// }));


// app.use("/clients", Clients);
// app.use("/login", Login);
// app.use("/tickets", Tickets);
// app.use("/employee", Employee);

// app.listen(3001, () => {
//   console.log("Server Is Running At Port Number 3001");
// });

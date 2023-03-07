const mysql = require("mysql");
const express = require("express");
const multer = require("multer");
const path = require("path");
var app = express();
const mysql = require("./db");

c.connect(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MySql Is Connected");
    }
  });


  const Image = require("./routers/img_upload");
  const Module = require("./routers/modules");
  const Dropdown = require("./routers/dropdown");
  const Count = require("./routers/count");
  
  app.use(Image);
  app.use(Module);
  app.use(Dropdown);
  app.use(Count);
  
  app.listen(3030, () => {
    console.log("Server Is Running At Port Number 3030");
  });
  
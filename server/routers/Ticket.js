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


module.exports = app;
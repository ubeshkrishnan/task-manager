const mysql = require("mysql2");

const db =mysql.createPool({
    host: "3.7.79.196",
    user: "root",
    password: "Dollar$2",
    database:"dbtask_manager"
})


module.exports = db;
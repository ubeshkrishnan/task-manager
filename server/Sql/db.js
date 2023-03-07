const mysql = require("mysql2");

const db =mysql.createPool({
    host: "192.168.130.20",
    user: "root",
    password: "Thirukumaran6",
    database:"dbtask_manager"
})

module.exports = mysql;
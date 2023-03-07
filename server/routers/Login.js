const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");





app.post('/history', (req, res) => {
    console.log(req.body);
    // const { ipAddress, username, password, attemptCount, badAttempt, message } = req.body;
    const ip_address = req.body.ip_address;
    
    const email = req.body.email;
    const password = req.body.password;
    const attempt_count =req.body.attempt_count;
    const bad_attempt = req.body.bad_attempt;
    const message = req.body.message;


     // Hash the password using bcrypt
     bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password: ' + err.stack);
            res.status(500).send({ error: 'Error hashing password' });
            return;
        }
    

    // Insert the login history into the database

    const loginHistory ="INSERT INTO login_history (ip_address, email, password, attempt_count, bad_attempt, message,created_date,updated_date) VALUES (?, ?, ?, ?, ?, ?,NOW(),NOW())";
    db.query(loginHistory, [ip_address, email, hashedPassword, attempt_count, bad_attempt, message], (error, results) => {
        if (error) {
            console.error('Error inserting data into database: ' + error.stack);
            res.status(500).send({ error: 'Error inserting data into database' });
            return;
        }
        res.send({ message: 'Login history stored successfully' });
    });
});
});
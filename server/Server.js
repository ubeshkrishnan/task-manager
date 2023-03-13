const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const fileupload = require('express-fileupload');

const db =mysql.createPool({
    host: "192.168.130.20",
    user: "root",
    password: "Thirukumaran6",
    database:"dbtask_manager"
})


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));





// Insert
app.post("/insert", (req, res)=>{
    console.log(req.body);
    const fullname = req.body.fullname+ ' '+ req.body.lastname;
    const email = req.body.email; 
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    const sqlInsert = "INSERT INTO sign_in(fullname, email, password,confirmpassword) VALUES (?,?,?,?)";
    db.query(sqlInsert,[fullname, email, password, confirmpassword],(err,result)=>  {
       if (err) throw err;
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM sign_in WHERE email = '${email}' AND password = '${password}'`;
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Error occurred' });
      } else if (result.length === 0) {
        res.status(401).send({ message: 'Invalid username or password' });
      } else {
        const user = result[0];
        // generate an access token or session cookie here
        res.status(200).send({ message: 'Login successful', user });
      }
    });
  });


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


app.get("/users", (req, res) => {
  db.query("SELECT * FROM client_master", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});


//get the id
app.get("/users/:id", (req, res) => {
 
  const id = req.params.id;
  console.log(id);
  db.query("SELECT * FROM client_master WHERE client_id = ?", [id], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]); // assuming id is unique, return only the first result
  });
});


// INSERTING A CLIENT

app.post('/client', (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
      clientname,
      clientshortcode,
      verticalid,
      ownername,
      ownerphone,
      owneremail,
      accountscontact,
      accountsphone,
      accountsemail,
      // profileimage,
      gstnumber,
      address1,
      address2,
      city,
      state,
      pincode
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO client_master (
        client_name,
        client_shortcode,
        vertical_id,
        owner_name,
          owner_phone,
          owner_email,
          accounts_contact,
          accounts_phone,
          accounts_email,
         
          gst_no,
          address_line_1,
          address_line_2,
          city,
          state,
          pin_code
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;
    // Execute the query with the extracted data
    db.query(query, [
      clientname,
      clientshortcode,
      verticalid,
      ownername,
      ownerphone,
      owneremail,
      accountscontact,
      accountsphone,
      accountsemail,
      // profileimage,
      gstnumber,
      address1,
      address2,
      city,
      state,
      pincode
  ], (error, results, fields) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error inserting data into the database');
      } else {
          res.status(200).send('Data inserted successfully');
      }
  });
})

app.put('/update/:id', (req, res) => {
  // Extract the client ID from the request URL
  const clientId = req.params.id;

  // Extract the updated values from the request body
  const updatedClient = req.body;
  console.log(updatedClient);

  // Update the client record in the database using SQL query
  const query = `UPDATE client_master SET client_name='${updatedClient.client_name}', client_shortcode='${updatedClient.client_shortcode}', vertical_id='${updatedClient.vertical_id}', owner_name='${updatedClient.owner_name}', owner_phone='${updatedClient.owner_phone}', owner_email='${updatedClient.owner_email}', accounts_contact='${updatedClient.accounts_contact}', accounts_phone='${updatedClient.accounts_phone}', accounts_email='${updatedClient.accounts_email}', gst_no='${updatedClient.gst_no}', address_line_1='${updatedClient.address_line_1}', address_line_2='${updatedClient.address_line_2}', city='${updatedClient.city}' ,state ='${updatedClient.state}',pin_code='${updatedClient.pin_code}' WHERE client_id=${(clientId)}`;
  
  db.query(query, (error, results, fields) => {
    if (error) {
      // Handle the database error
      console.log(error);
      res.status(500).send('Failed to update client record');
    } else {
      // Send the success response back to the client
      res.status(200).send('Client record updated successfully');
    }
  });
})

// endpoint to handle DELETE request
app.delete('/api/clients/:id', (req, res) => {
  const { id } = req.params;

  // Delete client from MySQL
  const sql = `DELETE FROM client_master WHERE client_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting client from database');
    } else if (result.affectedRows === 0) {
      res.status(404).send(`Client with ID ${id} not found`);
    } else {
      res.send(`Client with ID ${id} deleted successfully!`);
    }
  });
});


// INSERTING THE MEMBER
app.post('/member', (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
      userId,
      userGroup,
      firstname,
      lastname,
      email,
      designation,
      phone,
      password,
      address,
      
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO users (
        user_role_id,
        user_group_id,
        first_name,
        last_name,
        user_email,
        designation,
        phone,
        password,
        address
          
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;
    // Execute the query with the extracted data
    db.query(query, [
      userId,
      userGroup,
      firstname,
      lastname,
      email,
      designation,
      phone,
      password,
      address
     
  ], (error, results, fields) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error inserting data into the database');
      } else {
          res.status(200).send('Data inserted successfully');
      }
  });
})

app.get('/getmembers', (req, res) => {

  db.query("SELECT * FROM users", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

//get the id
app.get("/getmembers/:id", (req, res) => {
 
  const id = req.params.id;
  console.log(id);
  db.query("SELECT * FROM users WHERE user_id = ?", [id], (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]); // assuming id is unique, return only the first result
  });
});



app.put('/memberupdate/:id', (req, res) => {
  // Extract the client ID from the request URL
  const userId = req.params.id;

  // Extract the updated values from the request body
  const updatedMember = req.body;
  console.log(updatedMember);

  // Update the client record in the database using SQL query
  const query = `UPDATE users SET user_role_id='${updatedMember.user_role_id}', user_group_id='${updatedMember.user_group_id}', first_name='${updatedMember.first_name}', last_name='${updatedMember.last_name}', user_email='${updatedMember.user_email}', designation='${updatedMember.designation}', phone='${updatedMember.phone}', address='${updatedMember.address}',password='${updatedMember.password}'  WHERE user_id=${(userId)}`;
  
  db.query(query, (error, results, fields) => {
    if (error) {
      // Handle the database error
      console.log(error);
      res.status(500).send('Failed to update member record');
    } else {
      // Send the success response back to the client
      res.status(200).send('Member record updated successfully');
    }

    // IMGE upload
  });
})


// Task Insert
app.post('/task', (req, res) => {
  // Extract data from the request body
  console.log(req.body);
  const {
     
      task_name,
      category,
      start_date,
      end_date,
      task_assignperson,
      deadline,
      description,
     
      
  } = req.body;

  // Create a MySQL query to insert the data into a table
  const query = `
      INSERT INTO task (
      
       task_name,
        category,
       start_date,
       end_date,
      task_assignperson,
        deadline,
        description  
      ) VALUES (?, ?, ?, ?, ?, ?, ?);
  `;
    // Execute the query with the extracted data
    db.query(query, [

      task_name,
      category,
      start_date,
      end_date,
      task_assignperson,
      deadline,
      description,
    
     
  ], (error, results, fields) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error inserting data into the database');
      } else {
          res.status(200).send('Data inserted successfully');
      }
  });
})

// Task card Map
app.get("/taskcard", (req, res) => {
  db.query("SELECT * FROM task", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});


app.listen(3001,() => {
    console.log("server is connected");
})
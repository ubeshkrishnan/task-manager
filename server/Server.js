const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');

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
     description,
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
          description,
          gst_no,
          address_line_1,
          address_line_2,
          city,
          state,
          pin_code
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?);
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
    description,
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
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const clientname = req.body.clientname;
  const clientshortcode = req.body.clientshortcode;
  const verticalid = req.body.verticalid;
  const ownername = req.body.ownername;
  const ownerphone = req.body.ownerphone;
  const owneremail = req.body.owneremail;
  const accountscontact = req.body.accountscontact;
  const accountsphone = req.body.accountsphone;
  const accountsemail = req.body.accountsemail;
  const gstnumber = req.body.gstnumber;
  const description=req.body.description;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const city = req.body.city;
  const state = req.body.state;
  const pincode = req.body.pincode;

  const sql = `UPDATE clients SET client_name = ?, client_shortcode = ?, vertical_id = ?, owner_name = ?, owner_phone = ?,owner_email = ?,accounts_contact =?,accounts_phone =?,accounts_email =?,description=?,gst_no =?,address_line_1 =?,address_line_2 =?,city =?,state =?,pin_code =?,  WHERE id = ?`;
  db.query(sql, [clientname, clientshortcode, verticalid, ownername, ownerphone,owneremail,accountscontact,accountsphone,accountsemail,description,gstnumber,address1,address2,city,state,pincode, id], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send(`Client with ID ${id} updated successfully!`);
  });
});

// Delete a client
// app.delete('/api/clients/:id', (req, res) => {
//   const id = req.params.id;
//   pool.query('DELETE FROM clients WHERE id = ?', id, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });
app.post('/deleteDemo', (req, res) => {
  const id = req.body.id;
// console.log(req.body.id)
let sss=db.query(
    'DELETE FROM client_master WHERE client_id = ?',
    [id],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Failed to delete item');
      } else {
        res.sendStatus(204);
        // console.log(sss)
      }
    }
  );
});

// clientprofile card Mapping
app.get("/clientsprofile", (req, res) => {
  db.query("SELECT * FROM client_master", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
//   });
// });

// app.get("/clientsprofile", (req, res) => {
//   db.query("SELECT * FROM client_master INNER JOIN client_contact_details ON client_master.client_id = client_contact_details.client_id", (error, results, fields) => {
//     if (error) throw error;
//     res.send(results);
  });
});


app.listen(3001,() => {
    console.log("server is connected");
})


const express =require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const mime = require('mime-types');

const db =mysql.createPool({
    host: "192.168.130.20",
    user: "root",
    password: "Thirukumaran6",
    database:"dbtask_manager"
})


app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("uploads"));


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






// Mapping for client card 
app.get("/users", (req, res) => {
  db.query("SELECT * FROM client_master", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

// img storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage }).single("photo");

app.post('/client', upload, (req, res) => {
  res.json({ imageUrl: `../client/public/uploads${req.file.filename}` });
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
    gstnumber,
    address1,
    address2,
    city,
    state,
    pincode,
  } = req.body;

  const filename = req.file.originalname;
  console.log(filename);

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
      file_name,
      gst_no,
      address_line_1,
      address_line_2,
      city,
      state,
      pin_code
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

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
    description,
    filename,
    gstnumber,
    address1,
    address2,
    city,
    state,
    pincode
  ], (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error inserting data into the database');
    }
    res.status(200).send('Data inserted successfully');
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


// Ticket insert




// EMPLOYEEEE
// ADD EMPLOYEE
// app.post('/employees', (req, res) => {
//   const { employeeName, employeeCompany, employeeID, joiningDate, 
//     employeeUsername, password, emailID, phone, department, designation, description } = req.body;
  
//   const query = `INSERT INTO employees (employee_name, employee_company, employee_id, joining_date, employee_username, password, email_id, phone, department, designation, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
//   connection.query(query, [employeeName, employeeCompany, employeeID, joiningDate, employeeUsername, password, emailID, phone, department, designation, description], (error, results, fields) => {
//     if (error) throw error;
//     res.send(results);
//   });
// });

app.post('/', async (req, res) => {
  try {
    const { subject, assigned, image, createdate, status } = req.body;
    const [rows, fields] = await pool.execute(
      'INSERT INTO tickets (subject, assigned, image, createdate, status) VALUES (?, ?, ?, ?, ?)',
      [subject, assigned, image, createdate, status]
    );
    res.status(200).send(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM your_table_name WHERE id=${id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Data deleted successfully!');
  });
});



app.listen(3001,() => {
    console.log("server is connected ");
})


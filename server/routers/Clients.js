











// Mapping for client card 
app.get("/users", (req, res) => {
    db.query("SELECT * FROM client_master", (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
  // img storage confing
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/uploads');
    },
    filename: function (req, file, cb) {
      // const fileName = `image-${Date.now()}.${file.originalname}`;
      // file.originalname = fileName;
      cb(null, file.originalname);
    }
  });
  
  // img filter
  // const isImage = (req, file, callback) => {
  //   const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  //   const extension = mime.extension(file.mimetype);
  //   if (allowedExtensions.includes(extension)) {
  //     callback(null, true);
  //   } else {
  //     callback(null, Error("only images with extensions .jpg, .jpeg, .png, .gif are allowed"));
  //   }
  // };
  
  var uploads = multer({ storage: storage }).single("photo");
  
  // const upload = multer({
  //   storage: storage,
  //   fileFilter: isImage,
  // });
  
  // app.post('/client', upload.single("photo"), (req, res) => {
  //   if (!req.file) {
  //     console.log('No file uploaded');
  //     return res.status(400).send('No file uploaded');
  //   }
  app.post('/client',uploads,(req,res)=>{
    
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
  
    var filename = req.file.originalname;
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
      filename,// Use the original file name to insert into the database
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
  
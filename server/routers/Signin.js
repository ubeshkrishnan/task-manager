










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


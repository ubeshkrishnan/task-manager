
import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {Url} from "../../Global_variable/api_link"

function Signup() {

const [fullname,setFullName] = useState('');
const [lastname,setLastName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');
const[confirmpassword,setConfirmpassword] = useState('');
const[error,setError] = useState(null);

const InsertSignup =(e)=>{
    e.preventDefault();

    if (!fullname || !lastname || !email || !password || !confirmpassword) {
      setError("Please enter email and password");
      return;
    }

    axios.post(Url+'/insert"',{
        fullname: fullname,
        lastname:lastname,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    }).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
}


  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
      <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{ maxWidth: "32rem" }}>
        <form className="row g-1 p-3 p-md-4">
          <div className="col-12 text-center mb-1 mb-lg-5">
            <h1>Create your account</h1>
            <span>Free access to our dashboard.</span>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <label className="form-label">Full name</label>
              <input type="email" className="form-control form-control-lg" placeholder="John" value={fullname} onChange={(e)=>setFullName(e.target.value)} />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-2">
              <label className="form-label">&nbsp;</label>
              <input type="email" className="form-control form-control-lg" placeholder="Parker" onChange={(e)=>setLastName(e.target.value)} />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control form-control-lg" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input type="email" className="form-control form-control-lg" placeholder="8+ characters required" onChange={(e)=>setPassword(e.target.value)}  />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Confirm password</label>
              <input type="email" className="form-control form-control-lg" placeholder="8+ characters required" onChange={(e)=>{setConfirmpassword(e.target.value)}} />
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I accept the <a href="#!" title="Terms and Conditions" className="text-secondary">Terms and Conditions</a>
              </label>
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button className="btn btn-lg btn-block btn-light lift text-uppercase" alt="SIGNUP" onClick={InsertSignup}>SIGN UP</button>
          </div>
          <div className="col-12 text-center mt-4">
            <span className="text-muted">Already have an account? <Link to="sign-in" title="Sign in" className="text-secondary">Sign in here</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

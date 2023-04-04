

import React,{useState} from "react";
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/images/google.svg";
import axios from "axios";

import { useHistory } from "react-router-dom";


function SignIn() {
    const history = useHistory();

    const[email,setEmail] =useState('');
    const[password,setPassword]=useState('');
    const[error,setError] =useState(null);
    const [attempt_count, setAttemptCount] = useState(1);
    const [bad_attempt, setBadAttempt] = useState(false);
    const [message, setMessage] = useState('');
  
    
    const sendLoginHistory = (ip_address, email, password, attempt_count, bad_attempt, message) => {
      // Send the login history to the server to store in the database
      axios.post('http://localhost:3001/history', {
        ip_address: ip_address,
        email: email,
        password: password,
        attempt_count: attempt_count,
        bad_attempt: bad_attempt,
        message: message
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
    };


    
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setError("Please enter email and password");
        return;
    }

    // Get the client's IP address
  const ip_response = await axios.get('https://api.ipify.org/?format=json');
  const ip_address = ip_response.data.ip;

  setAttemptCount(attempt_count + 1);

    try {
      const res = await axios.post('http://localhost:3001/login', { email, password });
      // handle successful login here (e.g., store user data in local storage, redirect to dashboard page)
      const { user} =res.data;
      const roleSet = res.data.role;
      console.log(roleSet,'roleSet')
      console.log("BackendRole : "+roleSet)
      localStorage.setItem('role', +roleSet)
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('user_id',user.user_id)
      setBadAttempt(false);
      setMessage('Login successful');
      sendLoginHistory(ip_address, email, password, attempt_count, false, 'Login successful');

      if(roleSet === "0"){ // admin
        history.push('/tasks');
      }
      else if(roleSet === "1"){  // user
        history.push("/Employeetask");
      }
      else{
        alert("error")
      }
      //  history.push('/Employeetask');
      
    } catch (err) {
      setError(err.response.data.message);
      setBadAttempt(true);
    setMessage('Login failed');
    sendLoginHistory(ip_address, email, password, attempt_count, true, 'Login failed');
    }
  };


  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
      <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{maxWidth: "32rem"}}>
        <form className="row g-1 p-3 p-md-4">
          <div className="col-12 text-center mb-1 mb-lg-5">
            <h1>Sign in</h1>
            <span>Free access to our dashboard.</span>
          </div>
          <div className="col-12 text-center mb-4">
            <a className="btn btn-lg btn-outline-secondary btn-block" href="#!">
              <span className="d-flex justify-content-center align-items-center">
                <img className="avatar xs me-2" src={GoogleImg} alt="Imag Description" />
                Sign in with Google
              </span>
            </a>
            <span className="dividers text-muted mt-4">OR</span>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control form-control-lg" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <div className="form-label">
                <span className="d-flex justify-content-between align-items-center">
                  Password
                  <Link className="text-secondary" to="password-reset">Forgot Password?</Link>
                </span>
              </div>
              <input type="password" className="form-control form-control-lg" placeholder="***************" value={password} onChange={(e)=>setPassword(e.target.value)} />
              {error && <p style={{color:"red"}}>{error}</p>}
              </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button  className="btn btn-lg btn-block btn-light lift text-uppercase" atl="signin" onClick={handleLogin}>SIGN IN</button>
          </div>
          <div className="col-12 text-center mt-4">
            <span className="text-muted">Don't have an account yet? <Link to="sign-up" className="text-secondary">Sign up here</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
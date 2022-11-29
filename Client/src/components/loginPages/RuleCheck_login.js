import React, { useState } from 'react'
import './RuleChecker.css'
import { useNavigate } from 'react-router-dom';
const BACKEND_URI = "http://localhost:3000/api/";

function RuleCheck_login(props) {

  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("checker");


  const navigateToCheckerHome = () => {
    navigate('/CheckerHome');
  }

  return (
    <div className='container'>
      <h1 className='headingTitle'>Rule Checker Login</h1>
      <hr />
      <form className='formcode'>
        <input className="email form-control form-control-lg" type="email" placeholder="Email" aria-label="Email" value={email} onChange={(e) => setEamil(e.target.value)} />
        <input className="password form-control form-control-lg" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
      <button className='submit_btn btn butn' onClick={async (e) => {
        // send fetch (POST) request to server
        const requestOptions = {
          credentials: 'include',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, password: password, role: role })
        };

        var res = await fetch(BACKEND_URI + "login", requestOptions);
        alert((await res.json())["msg"]);
        setEamil("");
        setPassword("");
        setRole("checker")

        if (res.status == 200) {
          sessionStorage.setItem("curr_email", email);
          navigateToCheckerHome();
        }
      }}
      >Login</button>
    </div>
  )
}

export default RuleCheck_login
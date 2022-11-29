import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddRuleLogin.css'
const BACKEND_URI = "http://localhost:3000/api/";


const AddRuleLogin_login = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("adder");

  const navigateToAdderHome = () => {
    navigate('/AdderHome');
  }

  return (
    <div className='container'>
      <h1 className='headingTitle'>Rule Adder Login</h1>
      <hr />
      <form className='formcode'>
        <input className="email form-control form-control-lg" type="email" placeholder="Email" aria-label="Email" value={email} onChange={(e) => setEamil(e.target.value)}/>
        <input className="password form-control form-control-lg" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </form>
      <button type='submit' className='submit_btn btn butn' onClick={async (e) => {
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
        setRole("adder")

        if (res.status == 200) {
          sessionStorage.setItem("curr_email", email);
          navigateToAdderHome();
        }
      }}>Login</button>

    </div>
  )
}

export default AddRuleLogin_login
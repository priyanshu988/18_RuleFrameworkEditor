import React, { useState } from 'react'
import './AddRuleLogin.css'

const BACKEND_URI = "http://localhost:3000/api/";

function AddRuleLogin_signup(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullNamee] = useState("");
  const [role, setRole] = useState("adder");

  return (
    <div className='container'>
      <h1 className='headingTitle'>Rule Adder Register</h1>
      <hr />
      <form className='formcode'>
        <input className="email form-control form-control-lg" type="text" placeholder="Full Name" aria-label="full_name" value={fullName} onChange={(e) => setFullNamee(e.target.value)} />

        <input className="email form-control form-control-lg" type="email" placeholder="Email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="password form-control form-control-lg" type="password" placeholder="Password" aria-label="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
      <button type='submit' className='submit_btn btn butn' onClick={async (e) => {
        // send fetch (POST) request to server
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, password: password, fullName: fullName, role: role })
        };

        var res = await fetch(BACKEND_URI + "register", requestOptions);
        alert((await res.json())["msg"]);
        setEmail("");
        setPassword("");
        setFullNamee("");
        setRole("adder")
      }}>Register</button>

    </div>
  )
}

export default AddRuleLogin_signup
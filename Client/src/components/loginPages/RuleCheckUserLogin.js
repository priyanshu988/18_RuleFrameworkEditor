import React, { useState } from 'react'
import './AddRuleLogin.css'
import RuleCheck_login from './RuleCheck_login.js';
import RuleCheck_signup from './RuleCheck_signup.js';
import github from './assests/github.png';
import facebook from './assests/facebook.png';
import google from './assests/google.png';

const RuleCheckUserLogin = () => {
  const [status1, setStatus] = useState("login");
  return (
    <div className='body'>
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <h1 className='headingTitle'>RULE EDITOR FRAMEWORK</h1>
      <hr className='line-top' />
      <div className='container form_area'>
        <div className='upper_part'>
          <button className='btn butn' onClick={() => setStatus("login")}>Login</button>
          <button className='btn butn' onClick={() => setStatus("signup")}>Register</button>
        </div>
        <hr className='line-form-top' />
        <div className='lower_part'>
          {status1 === "login" && <RuleCheck_login />}
          {status1 === "signup" && <RuleCheck_signup />}
        </div>
        <hr className='line-form-bottom' />
        <div className='images'>
          <img src={github} className='image' />
          <img src={facebook} className='image' />
          <img src={google} className='image' />

        </div>
      </div>
    </div>
  )
}

export default RuleCheckUserLogin
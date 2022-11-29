import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    const navigateToAdder = () => {
        navigate('/AddRuleLogin');
    }
    const navigateToChecker = () => {
        navigate('/RuleCheckUserLogin');
    }
    return (
        <div className='body'>
            <div className="bg" />
            <div className="bg bg2" />
            <div className="bg bg3" />
            <div className='codeHere'>

                <h1 className='headingTitle'>RULE EDITOR FRAMEWORK</h1>
                <hr className='lineclass' />
                <div className='cardclass'>
                    <div className='card1'>
                        <div className="card-body">
                            <h3 className="card-title">RULE ADDER</h3>
                            <hr className='line-form-top' />
                            <p className="card-text">Add rules here !</p>
                            <p className="card-text">Credentials required</p>

                            <hr className='line-form-top' />
                            <button className="btn butn" onClick={navigateToAdder}>Login</button>

                        </div>
                    </div>
                    <div className='card1'>
                        <div className="card-body">
                            <h3 className="card-title">RULE CHECKER</h3>
                            <hr className='line-form-top' />
                            <p className="card-text">Check your code here !</p>
                            <p className="card-text">You need to login here before proceeding further</p>
                            <hr className='line-form-top' />

                            <button className="btn butn" onClick={navigateToChecker}>Login</button>

                        </div>
                    </div>
                </div>

            </div>
            <div className='footer'>
                <p>Made By Group 18</p>
            </div>
        </div>
    )
}

export default Login
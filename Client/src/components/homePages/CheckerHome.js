import React, { useEffect, useState } from 'react'
import logout from './assets/logout';
import './CheckerHome.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useNavigate } from 'react-router-dom';
import AdderPopup from './AdderPopup';

const BACKEND_URI = "http://localhost:3000/rule/";


const CheckerHome = () => {
    const [code, setCode] = useState();
    const email = sessionStorage.getItem("curr_email");
    const [ruleDetails, setRuleDetails] = useState([]);
    const [ruleCheck, setRuleCheck] = useState(true);
    const [hashCode, setHashCode] = useState("");
    const [addRule, setAddRule] = useState(false);
    const [currentValue, setCurrentValue] = useState();

    useEffect(() => {
        var res1 = async () => {
            const requestOptions = {
                credentials: "include",
                method: "GET",
                headers: { "Content-Type": "application/json" },
            };
            // console.log("role: ", role);
            var url = BACKEND_URI;
            const response = await fetch(url, requestOptions);
            if (response) {

                // sessionStorage.removeItem("curr_email");
                var jsonResponse = await response.json();
                // console.log("res: ", jsonResponse.data);
                setRuleDetails(jsonResponse.data)
                // console.log("studentDetails : ", studentDetails);
                // console.log(typeof studentDetails);
                sessionStorage.setItem("curr_email", email);
                // navigateToStudentQuery();
            }
        };
        res1();
    }, []);
    // console.log(ruleDetails);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/');
    }

    if (email == null) {
        return (<p>
            Please Login First.
            <button onClick={navigateToLogin} className='btn btn-primary'>
                Go To Login
            </button>
        </p>)
    }


    

    function parse(CC) {
        var sampleLine1 = code.split('\n');
        //split each entry in sampleLine1 by space
        var code_tokens = [];
        for (var i = 0; i < sampleLine1.length; i++) {
            //split each entry in sampleLine1 by space and push it to sampleLines individually not as an array and dont push empty strings
            code_tokens.push(...sampleLine1[i].split(' ').filter(Boolean));
        }
        CC = CC.replace("\n", "");
        // console.log(CC);
        var CC_tokens = CC.split(',');
        //console.log(code_tokens);
        // console.log(CC_tokens);
        //remove the prefix and suffix spaces from the sample lines
        for (var i = 0; i < code_tokens.length; i++) {
            code_tokens[i] = code_tokens[i].trim();
        }
        // console.log(code_tokens);
        //syntax check the code tokens using the CC tokens in same order 
        var codeIndex = 0;
        var CCIndex = 0;
        var flag = false;
        for (var codeIndex = 0; codeIndex < code_tokens.length; codeIndex++) {
            //console.log(code_tokens[codeIndex]);
            if (CC_tokens[CCIndex] === code_tokens[codeIndex]) {
                //console.log("matched",CC_tokens[CCIndex],code_tokens[codeIndex]);
                CCIndex++;
            }
            else if (CC_tokens[CCIndex] === "*") {
                if (CCIndex === CC_tokens.length - 1) {
                    flag = false;
                    break;
                }
                else {
                    //console.log("here");
                    var next = CC_tokens[CCIndex + 1];
                    //var temp=code_tokens[codeIndex];
                    while (codeIndex < code_tokens.length && code_tokens[codeIndex] != next) {
                        codeIndex++;
                    }
                    if (code_tokens[codeIndex] === next) {
                        //console.log("matched",CC_tokens[CCIndex],code_tokens[codeIndex]);
                        //console.log("her1e");
                        CCIndex = CCIndex + 2;
                    }
                    else {
                        if (codeIndex === code_tokens.length) {
                            flag = true;
                            console.log("Syntax Error ", "Expected " + next);
                            setRuleCheck(true);
                            alert("Syntax Error Please Check!");
                            break;
                        }
                        console.log("Syntax Error at " + code_tokens[codeIndex], "Expected " + next);
                        setRuleCheck(true);
                        alert("Syntax Error Please Check!");
                        flag = true;
                        break;
                    }
                }
            }
            else {
                console.log("Syntax Error at " + code_tokens[codeIndex], "Expected " + CC_tokens[CCIndex]);
                setRuleCheck(true);
                alert("Syntax Error Please Check!");
                flag = true;
                break;
            }
        }
        if (!flag) {
            console.log("Syntax Correct");
            alert("Matched! Now You Convert it Into Hash");
            setHashCode(btoa(code));
            setRuleCheck(false);
        }
    }



    return (
        <div className='body'>
            <main>
                <div className="bg" />
                <div className="bg bg2" />
                <div className="bg bg3" />
                <h1 className='headingTitle'>CHECKER HOME PAGE</h1>
                <hr className='line-top' />
                <div className='userdetails'>
                    <h4 className='username headingTitle'>Username: {email}</h4>
                    <img className='logouticon' src={logout} alt='' />
                </div>
                <hr className='line-top2' />
                <CodeEditor
                    value={code}
                    language="c++"
                    placeholder="Please enter C++ code."
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                        minHeight: '500px',
                        borderRadius: "20px"

                    }}

                />
                <form>
                    <select placeholder='Select' className='form-control' value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}>
                        <option value="N/A">Select Rule</option>
                        {ruleDetails.map(row => (
                            <option value={row.Content}>{row.Email}/{row.Name}</option>
                        ))}
                    </select>
                </form>
                <div>
                <button className='btn butn' onClick={function (event) { setAddRule(true); }}>View Rules</button>

                    <button className='btn butn' type='submit' onClick={async (e) => {
                        parse(currentValue)
                    }}>Check</button>
                    
                    <br />
                    <button className='btn butn' type='submit' disabled={ruleCheck} onClick={async (e) => {
                        alert(hashCode);
                        alert(atob(hashCode));
                    }}>Convert Into Hash</button>
                </div>
            </main>
            <AdderPopup trigger={addRule} setTrigger={setAddRule}>
            <table className="table table-light">
                        <thead className='table-dark'>
                            <tr>
                                <th itemScope='col'>S.No.</th>
                                <th itemScope='col'>Rule Name</th>
                                <th itemScope='col'>Construct</th>
                            </tr>

                        </thead>

                        <tbody class="table-group-divider">
                            {ruleDetails.map((row, index) => (
                                <tr>
                                    <td className="">{index + 1}</td>
                                    <td className="">{row.Email}/{row.Name}</td>
                                    <td className="">{row.Content}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </AdderPopup>
        </div>
        
    )
}

export default CheckerHome
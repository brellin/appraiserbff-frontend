import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './login.module.scss'
import { logUserIn, createAccount } from '../../actions'

const Login = props => {
    //log in
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ view, toggleView ] = useState(true);

    //create account

    const [ newUsername, setNewUsername ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");
    const [ companyName, setCompanyName ] = useState("");
    const [ retypePass, setRTPass ] = useState("");

    const createAccount = e => {
        e.preventDefault();
        const newAccount = {
            user: {
              username: newUsername,
              organization: companyName,
              realEstate: { buy: [], sell: [] },
              widgets: []
            },
            userView: "buy",
            loggingIn: false,
            updatingAccount: false,
            updatingRealEstate: false,
            updatingWidgets: false,
            error: null
          };

        if(newPassword === retypePass){
            props.createAccount(newAccount, newPassword);
        }
    }

    return(
        <div className={styles.fullPage}>


            <form className={styles.loginForm} style={view ? null : {display: "none"}}>
                <label>username/email</label>
                <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                
                <label>password</label>
                <input 
                type="text" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />

                <button 
                type="submit"
                onSubmit={e => {
                    e.preventDefault();
                    const credentials = {
                        username: username,
                        password: password
                    }

                    props.logUserIn(credentials)
                }}
                >submit</button>
                <p>no account? <span onClick={e => toggleView(!view)}>make one!</span></p>
            </form>
          
          
            <form className={styles.createAccForm} style={view ? {display: "none"} : {display: "flex"}}>
                
                <label>new username/email</label>
                <input 
                type="text"
                value={newUsername}
                onChange={e => {
                    setNewUsername(e.target.value)
                }}
                />

                <label>company name</label>
                <input 
                type="text"
                value={companyName}
                onChange={e => {
                    setCompanyName(e.target.value)
                }}
                />

                <label>new password</label>
                <input 
                type="text"
                value={newPassword}
                onChange={e => {
                    setNewPassword(e.target.value)
                }}
                />

                <label>re-ype password</label>
                <input 
                type="text"
                value={retypePass}
                onChange={e => {
                    setRTPass(e.target.value)
                }}
                />

                <button
                type="submit"
                onClick={e => {
                    createAccount(e);
                }}
                >create account</button>
                
                <p><span onClick={e => toggleView(!view)}>back to login...</span></p>
            </form>

        </div>
    );
}


export default connect(null, { logUserIn, createAccount })(Login);
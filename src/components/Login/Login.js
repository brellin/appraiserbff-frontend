import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './login.module.scss'
import { logUserIn } from '../../actions'

const Login = props => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    return(
        <div className={styles.fullPage}>
            <form className={styles.loginForm}>
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
            </form>

            
        </div>
    );
}


export default connect(null, { logUserIn })(Login);
import React, { useState, useEffect} from 'react'
import styles from './newCard.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewCard = props => {

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [thisState, setThisState] = useState("");
    const [zip, setZip] = useState("");

    const getInfoFromZillow = () => {
        console.log("working");
        
        let splitAddress = address.split(" ").join("+");
        console.log(splitAddress);

        let APIKey = "";
        let endPoint = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=<${APIKey}>&address=2114+Bigelow+Ave&citystatezip=${splitAddress}%2C+${thisState}`
        axios.get(endPoint)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return(
        <div className={styles.newCard}>
            <div className={styles.newCardModal}>
                <div className={styles.cardSettingsTop}>
                    <h2>New Estimate</h2>
                    <Link to="/home/">
                        <i className="fas fa-times" />
                    </Link>
                </div>
                <hr />

                <form className={styles.formOne}>
                    <div>
                        <label>Address:</label>
                        <input 
                        type="text" 
                        value={address}
                        onChange={e => {
                            e.preventDefault();
                            setAddress(e.target.value);
                        }}
                        />
                    </div>

                    <div>
                        <label>City:</label>
                        <input 
                        type="text" 
                        value={city}
                        onChange={e => {
                            e.preventDefault();
                            setCity(e.target.value);
                        }}
                        />
                    </div>

                    <div>
                        <label>State:</label>
                        <input 
                        type="text" 
                        value={thisState}
                        onChange={e => {
                            e.preventDefault();
                            setThisState(e.target.value);
                        }}
                        />
                    </div>

                    <div>
                        <label>Zip:</label>
                        <input 
                        type="text" 
                        value={zip}
                        onChange={e => {
                            e.preventDefault();
                            setZip(e.target.value);
                        }}
                        />
                    </div>


                    <button 
                    onClick={e => {
                        e.preventDefault()
                        getInfoFromZillow();
                    }}
                    >get details</button>
                </form>
                <hr />
            </div>  
        </div>
    );
}

export default NewCard
import React, { useState, useEffect} from 'react'
import styles from './newCard.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewCard = props => {
            //info for top form
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [thisState, setThisState] = useState("");
    const [zip, setZip] = useState("");
    
            //info for bottom form
    const [sqFootage, setSqFootage] = useState("");
    const [bed, setBed] = useState("");
    const [bath, setBath] = useState("");

    const getInfoFromZillow = () => {
        console.log("working");
        
        let splitAddress = address.split(" ").join("+");

        let APIKey = "X1-ZWz18227znjxu3_1acr8";
        //http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=<${APIKey}>&address=${splitAddress}&citystatezip=${city}%2C+${thisState}
        let endPoint = `http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=${APIKey}&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`
        axios.get(endPoint, {headers: {"zws-id": APIKey}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const submitForm = () => {
        console.log("submitting form....")
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

                <form className={styles.formTwo}>
                    <div>
                        <label>sq footage:</label>
                        <input 
                        type="text" 
                        style={{marginLeft: "20px"}}
                        value={sqFootage}
                        onChange={e => {
                            e.preventDefault();
                            setSqFootage(e.target.value);
                        }}
                        />
                    </div>

                    <div>
                        <label>bed:</label>
                        <input 
                        type="text" 
                        style={{marginLeft: "67px"}}
                        value={bed}
                        onChange={e => {
                            e.preventDefault();
                            setBed(e.target.value);
                        }}
                        />
                    </div>

                    <div>
                        <label>bath:</label>
                        <input 
                        type="text" 
                        style={{marginLeft: "63px"}}
                        value={bath}
                        onChange={e => {
                            e.preventDefault();
                            setBath(e.target.value);
                        }}
                        />
                    </div>

                    <button 
                    onClick={e => {
                        e.preventDefault()
                        submitForm();
                    }}
                    >Submit Form</button>
                </form>
                <hr />

            </div>  
        </div>
    );
}

export default NewCard
import React from 'react'
import styles from './fullCard.module.scss'
import { Link } from 'react-router-dom'

const FullCard = props => {
    console.log(props);
    return(
        <div className={styles.cardSettings}>
            <div className={styles.cardSettingsModal}>
                <div className={styles.cardSettingsTop}>
                    <Link to="/home/">
                        <i className="fas fa-times" />
                    </Link>
                    <h2>{props.address}</h2>
                    <img src={props.picture} />
                </div>
                <hr />

                <p>{props.bathrooms}</p>
                <p>{props.bedrooms}</p>
                <p>{props.built}</p>
                <p>{props.onMarket}</p>
                <p>{props.zestimate}</p>
            </div>
        </div>
    );
}

export default FullCard
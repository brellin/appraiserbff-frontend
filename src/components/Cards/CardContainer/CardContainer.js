import React from 'react'
import styles from "./cardContainer.module.scss";
import Card from '../Card';
import{ Link } from 'react-router-dom';
import { connect } from 'react-redux';
 
const CardContainer = props => {
    return(
        <div className={styles.cardContainerWrapper}>
            <div className={styles.flexTop}>
                <div>
                    <label>filter results:</label>
                    <input type="text"/>
                </div>
                <Link to="/home/cards/new" >
                    <button>New Estimate</button>
                </Link>
            </div>
            <div className={styles.cardContainer}>
                {props.realEstate.buy.map(item => {
                    return(
                        <Card mode="buy" key={item.id} item={item}/>
                    );
                })}
                {props.realEstate.sell.map(item => {
                    return(
                        <Card mode="sell" key={item.id} item={item}/>
                    );
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        realEstate: state.user.realEstate
    }
}

export default connect(mapStateToProps, { })(CardContainer);
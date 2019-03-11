import React from 'react'
import styles from "./cardContainer.module.scss";
import Card from '../Card';
import{ Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addRealEstate } from '../../../actions';

const CardContainer = props => {
    return(
        <div className={styles.cardContainerWrapper}>
            <Link to="/home/cards/new" >
                <button>New Estimate</button>
            </Link>
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

export default connect(mapStateToProps, { addRealEstate })(CardContainer);
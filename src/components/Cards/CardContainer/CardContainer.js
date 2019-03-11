import React from 'react'
import styles from "./cardContainer.module.scss";
import Card from '../Card';

import { connect } from 'react-redux';
import { addRealEstate } from '../../../actions';

const CardContainer = props => {
    return(
        <div className={styles.cardContainerWrapper}>
            <button>New Estimate</button>
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
import React, { useState } from 'react'
import styles from "./cardContainer.module.scss";
import Card from '../Card';
import{ Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserView } from '../../../actions'


 
const CardContainer = props => {

    const [filteredByStatus, setFBS] = useState(1)

    return(
        <div className={styles.cardContainerWrapper}>
            <div className={styles.flexTop}>
                <div>
                    <label>filter results:</label>
                    <input type="text"/>
                </div>

                <div>
                    <p>{filteredByStatus == 1 ? "all" : filteredByStatus == 2 ? "buy" : filteredByStatus == 3 ? "sell" : null }</p>

                    <input 
                    type="range" 
                    min="1" 
                    max="3" 
                    value={filteredByStatus}
                    className={styles.slider} 
                    id="myRange" 
                    onChange={e => {
                        setFBS(e.target.value);       //returns 1 or 3 tepending on position.... pretty cool, didnt know about this feature
                        console.log(filteredByStatus);
                    }}
                    />
                </div>



                <Link to="/home/cards/new" >
                    <button>New Estimate</button>
                </Link>
            </div>
            <div className={styles.cardContainer}>
                {
                    filteredByStatus == 1 || filteredByStatus == 2 ? props.realEstate.buy.map(item => {
                        return(
                            <Card mode="buy" key={item.id} item={item}/>
                        );
                    }) : null
                }


                {filteredByStatus == 1 || filteredByStatus == 3 ? props.realEstate.sell.map(item => {
                    return(
                        <Card mode="sell" key={item.id} item={item}/>
                    );
                }) : null
            
            }



            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        realEstate: state.user.realEstate
    }
}

export default connect(mapStateToProps, { setUserView })(CardContainer);
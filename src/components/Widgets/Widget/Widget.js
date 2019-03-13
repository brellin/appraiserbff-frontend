import React, { useState } from "react";
import styles from "./widget.module.scss";
import widgetData from "./widgetData.js";
import { connect } from "react-redux";
import { sortRealEstate } from "../../../actions";

function Widget(props) {
  // sort array in bul or sell
  const realEstateSorter = (sortProp, order) => {
    const newREOrder = [...props.realEstate];
    newREOrder.sort((a, b) => {
      if (typeof a[sortProp] === "number") {
        // Sort by number

        //Sort high-to-low or low-to-high based on input
        return order === "lowToHigh"
          ? a[sortProp] - b[sortProp]
          : b[sortProp] - a[sortProp];
      } else if (typeof a[sortProp] === "string") {
        // Sort strings
        const aProp = a[sortProp].toLowerCase();
        const bProp = b[sortProp].toLowerCase();

        if (aProp === bProp) {
          // If they are the same string, do nothing
          return 0;
        } else {
          // Otherwise swap their order, based on input
          const top = order === "highToLow" ? -1 : 1;
          const bottom = order === "highToLow" ? 1 : -1;
          return aProp < bProp ? bottom : top;
        }
      }
      // In case I messed something up and type isn't a string or number,
      // do nothing
    });
    console.log(newREOrder);
    props.sortRealEstate(newREOrder);
  };
  console.log(props.userView);
  // Real Estate objects based on view
  const localRE =
    props.userView === "all"
      ? [...props.realEstate.sell, ...props.realEstate.buy]
      : props.realEstate[props.userView];

  const widgetObj = widgetData[props.widget](localRE);

  return (
    <div className={styles.widget}>
      <div className={styles.info}>
        <h2>{widgetObj.header}</h2>
        <p>{widgetObj.data()}</p>
      </div>
      <div className={styles.sortArrows}>
        <p>
          <i
            onClick={() => realEstateSorter(widgetObj.estateProp, "highToLow")}
            className="fas fa-sort-amount-up"
          />
        </p>
        <p>
          <i
            onClick={() => realEstateSorter(widgetObj.estateProp, "lowToHigh")}
            className={`fas fa-sort-amount-up ${styles.down}`}
          />
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  widgets: state.user.widgets,
  realEstate: state.user.realEstate,
  userView: state.userView
});

export default connect(
  mapStateToProps,
  { sortRealEstate }
)(Widget);

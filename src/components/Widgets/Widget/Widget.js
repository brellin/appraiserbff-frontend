import React from "react";
import styles from "./widget.module.scss";
import widgetData from "./widgetData.js";

function Widget(props) {
  const widgetObj = widgetData[props.widget](props.realEstate);

  return (
    <div className={styles.widget}>
      <div className="info">
        <h2>{widgetObj.header}</h2>
        <p>{widgetObj.data()}</p>
      </div>
      <div className="sortArrows">
        <p>U</p>
        <p>D</p>
      </div>
    </div>
  );
}

export default Widget;

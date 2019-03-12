import React from "react";
import styles from "./manageWidgets.module.scss";
import { Link } from "react-browser-router";
import widgetData from "../Widget/widgetData.js";

const props = {
  widgets: ["averageZestimate", "timeOnMarket", "timeOnMarket", "timeOnMarket"]
};

// Live version needs props
function ManageWidgets() {
  // Name is tied to data which I don't want to pass here.  Will have to find a way to split name from
  // value.  Will just use coded name in widgets for now so I can progress
  const sortNames = props.widgets.map(name => {
    return (
      <div>
        <h3>{name}</h3>
        <div>
          <i class="fas fa-caret-up" />
          <i class="fas fa-caret-down" />
        </div>
      </div>
    );
  });
  return (
    <Link className={styles.link} to="/home">
      <div className={styles.manageWidgets}>
        <Link className={styles.link} to="/home/widgets">
          <div className={styles.dialog}>{sortNames}</div>
        </Link>
      </div>
    </Link>
  );
}

export default ManageWidgets;

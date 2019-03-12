import React from "react";
import styles from "./manageWidgets.module.scss";
import { Link } from "react-browser-router";
import widgetData from "../Widget/widgetData.js";

import { updateWidgets } from "../../../actions";

let props = {
  widgets: ["averageZestimate", "timeOnMarket", "timeOnMarket", "timeOnMarket"]
};

// Live version needs props
function ManageWidgets() {
  // Change order of widgets on click;
  const changeOrder = (index, move) => {
    const newOrder = [...props.widgets]; // fight the power
    const holder = newOrder[index];
    newOrder[index] = newOrder[index + move];
    newOrder[index + move] = holder;
    props.widgets = newOrder;
    // updateWidgets(newOrder);
  };

  // Add/Remove widgets
  const setWidgets = widget => {
    let widgets = [...props.widgets];
    const index = props.widgets.indexOf(widget);
    if (index > -1) {
      widgets = [...widgets.slice(0, index), ...widgets.slice(index + 1)];
    } else {
      widgets.push(widget);
    }
    //console.log(widgets);
    //updateWidgets(widgets);
  };

  // Users widgets, in order
  const getUserWidgetList = () => {
    // Name is tied to data which I don't want to pass here.  Will have to find a way to split name from
    // value.  Will just use coded name in widgets for now so I can progress
    return props.widgets.map((name, index) => {
      let up, down;
      if (index > 0) {
        up = (
          <i
            onClick={() => changeOrder(index, -1)}
            className="fas fa-caret-up"
          />
        );
      } else {
        up = <i className={`fas fa-caret-up ${styles.inactive}`} />;
      }
      if (index < props.widgets.length - 1) {
        down = (
          <i
            onClick={() => changeOrder(index, 1)}
            className="fas fa-caret-down"
          />
        );
      } else {
        down = <i className={`fas fa-caret-down ${styles.inactive}`} />;
      }
      return (
        <div key={index} className={styles.widget}>
          <p>{name}</p>
          <div className={styles.arrows}>
            {up}
            {down}
          </div>
        </div>
      );
    });
  };

  // Get all widgets available
  const getWidgetChecklist = () => {
    return Object.keys(widgetData).map(widget => {
      let checked = props.widgets.includes(widget) ? true : false;

      return (
        <div>
          <input
            type="checkbox"
            onChange={() => setWidgets(widget)}
            checked={checked}
          />{" "}
          {widget}
        </div>
      );
    });
  };

  const sortNames = getUserWidgetList();
  const fullWidgetList = getWidgetChecklist();
  return (
    <div className={styles.manageWidgets}>
      <div className={styles.dialog}>
        <section>
          <h2>Order</h2>
          <div className={styles.sortWidgets}>{sortNames}</div>
        </section>
        <section>
          <h2>Widgets</h2>
          <div className={styles.allWidgets}>{fullWidgetList}</div>
        </section>
        <section>
          <Link to="/home">X</Link>
        </section>
      </div>
    </div>
  );
}

export default ManageWidgets;

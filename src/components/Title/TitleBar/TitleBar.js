import React, { useState } from "react";
import styles from "./titleBar.module.scss";
import { Link } from "react-router-dom";

const TitleBar = props => {
  return (
    <div>
      <div className={styles.titleBar}>
        <h2>Company Logo</h2>
        <div className={styles.user}>
          <Link to="/home/account_settings">
            <i className="fas fa-caret-down" />
          </Link>

          <h3>username</h3>
          <div className="user-img" />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;

import React from "react";
import styles from "./widgetContainer.module.scss";
import { Link } from "react-router-dom";
import Widget from "../Widget";

const props = {
  user: {
    username: "email@domain.com",
    organization: "Tri-State Real Estate",
    realEstate: {
      sell: [
        {
          id: "df987fdlkj35",
          address: "1234 Some St",
          city: "Springfield",
          state: "IL",
          zipcode: 78787,
          bedrooms: 4,
          bathrooms: 5,
          built: 1990,
          picture: "https://i.imgur.com/ufZjaLz.jpg",
          depreciation: [0.07, -0.03],
          zestimate: 780000,
          certainty: 85000,
          onMarket: "2019-01-04T19:37:20.759Z"
        },
        {
          id: "6gfhpu87hdfv",
          address: "12356 Very Real St",
          city: "DefinitelyACity",
          state: "CA",
          zipcode: 22222,
          bedrooms: 1,
          bathrooms: 2,
          built: 1850,
          picture: "https://i.imgur.com/ufZjaLz.jpg",
          depreciation: [0.07, -0.03],
          zestimate: 150000,
          certainty: 10000,
          onMarket: "2019-02-09T19:37:20.759Z"
        },
        {
          id: "asdfadsf",
          address: "5555 Address St",
          city: "Cityfield",
          state: "IL",
          zipcode: 99999,
          bedrooms: 1,
          bathrooms: 1,
          built: 1920,
          picture: "https://i.imgur.com/ufZjaLz.jpg",
          depreciation: [0.07, -0.03],
          zestimate: 120000,
          certainty: 12000,
          onMarket: "2019-03-08T19:37:20.759Z"
        },
        {
          id: "fgjhgdjkd",
          address: "12345 Country Road 17 S",
          city: "Nowhereville",
          state: "UT",
          zipcode: 11111,
          bedrooms: 5,
          bathrooms: 3,
          built: 1989,
          picture: "https://i.imgur.com/ufZjaLz.jpg",
          depreciation: [0.07, -0.03],
          zestimate: 200000,
          certainty: 9000,
          onMarket: "2019-03-01T19:37:20.759Z"
        }
      ],
      buy: [
        {
          id: "fghdfh5473457",
          address: "1234 Out Of Names Ct",
          city: "Zionsville",
          state: "TN",
          zipcode: 89898,
          bedrooms: 1,
          bathrooms: 4,
          built: 1956,
          picture: "https://i.imgur.com/ufZjaLz.jpg",
          depreciation: [0.07, -0.03],
          zestimate: 910000,
          certainty: 70000,
          onMarket: "2019-01-21T19:37:20.759Z"
        },
        {
          id: "3459078234sdfjhdf",
          address: "1234 Still Making Up Names Blvd",
          city: "Themoon",
          state: "OH",
          zipcode: 12235,
          bedrooms: 2,
          bathrooms: 2,
          built: 1944,
          picture: "https://i.imgur.com/ufZjaLz.jpg",
          depreciation: [0.07, -0.03],
          zestimate: 50000,
          certainty: 10000,
          onMarket: "2018-01-04T19:37:20.759Z"
        }
      ]
    },
    widgets: [
      "averageZestimate",
      "timeOnMarket",
      "timeOnMarket",
      "timeOnMarket"
    ]
  },
  userView: "sell",
  loggingIn: false,
  updatingAccount: false,
  addingRealEstate: false,
  error: null
};

// Needs props on live version
function WidgetContainer() {
  const usersWidgets = props.user.widgets.map((key, i) => {
    return (
      <Widget
        key={i}
        widget={key}
        realEstate={props.user.realEstate[props.userView]}
      />
    );
  });
  return (
    <div className={styles.widgetContainer}>
      <div className={styles.widgetTitle}>
        <h2>Overview</h2>
        <Link to="/home/widgets">
          <i class="fas fa-cogs" />
        </Link>
      </div>
      {usersWidgets}
    </div>
  );
}
//
export default WidgetContainer;

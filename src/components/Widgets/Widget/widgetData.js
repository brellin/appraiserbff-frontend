import wMath from "./widgetMath.js";

function timeOnMarket(realEstate) {
  return {
    header: "Average Time On Market",
    data: () => wMath.averageOnMarket(realEstate),
    estateProp: "onMarket",
    display: "Time On Market"
  };
}

function averageZestimate(realEstate) {
  return {
    header: "Average Estimate",
    data: () => wMath.average(realEstate, "zestimate"),
    estateProp: "zestimate",
    display: "Average Estimate"
  };
}

export default { timeOnMarket, averageZestimate };

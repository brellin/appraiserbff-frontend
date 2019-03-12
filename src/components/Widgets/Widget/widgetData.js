import wMath from "./widgetMath.js";

function timeOnMarket(realEstate) {
  return {
    header: "Average Time On Market",
    data: () => wMath.averageOnMarket(realEstate),
    estateProp: "onMarket"
  };
}

function averageZestimate(realEstate) {
  return {
    header: "Average Estimate",
    data: () => wMath.average(realEstate, "zestimate"),
    estateProp: "zestimate"
  };
}

export default { timeOnMarket, averageZestimate };

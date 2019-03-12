import wMath from "./widgetMath.js";

function timeOnMarket(realEstate) {
  return {
    header: "Average Time On Market",
    data: () => wMath.averageOnMarket(realEstate)
  };
}

function averageZestimate(realEstate) {
  return {
    header: "Average Estimate",
    data: () => wMath.average(realEstate, "zestimate")
  };
}

export default { timeOnMarket, averageZestimate };

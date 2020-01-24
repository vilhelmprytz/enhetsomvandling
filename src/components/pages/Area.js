import React from "react";
import Core from "../Core";

const units = ["m^2", "dm^2", "cm^2", "mm^2"];

function power(unit) {
  if (unit === "m^2") {
    return 1;
  }
  if (unit === "dm^2") {
    return 3;
  }
  if (unit === "cm^2") {
    return 5;
  }
  if (unit === "mm^2") {
    return 7;
  }
}

function AreaPage() {
  return <Core title="Area" units={units} power={power} initialValue="m^2" />;
}

export default AreaPage;

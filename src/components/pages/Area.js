import React from "react";
import Core from "../Core";

const units = ["m^2", "dm^2", "cm^2", "mm^2"];

function power(unit) {
  if (unit === "m^2") {
    return 0;
  }
  if (unit === "dm^2") {
    return 2;
  }
  if (unit === "cm^2") {
    return 4;
  }
  if (unit === "mm^2") {
    return 6;
  }
}

function AreaPage() {
  return <Core title="Area" units={units} power={power} initialValue="m^2" />;
}

export default AreaPage;

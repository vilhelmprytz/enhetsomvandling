import React from "react";
import Core from "../Core";

const units = ["m^3", "dm^3", "cm^3", "mm^3"];

function power(unit) {
  if (unit === "m^3") {
    return 1;
  }
  if (unit === "dm^3") {
    return 4;
  }
  if (unit === "cm^3") {
    return 7;
  }
  if (unit === "mm^3") {
    return 10;
  }
}

function VolumePage() {
  return <Core title="Volym" units={units} power={power} initialValue="m^3" />;
}

export default VolumePage;

import React from "react";
import Core from "../Core";

const units = ["m", "dm", "cm", "mm"];

function power(unit) {
  if (unit === "m") {
    return 1;
  }
  if (unit === "dm") {
    return 2;
  }
  if (unit === "cm") {
    return 3;
  }
  if (unit === "mm") {
    return 4;
  }
}

function LengthPage() {
  return <Core title="Längd" units={units} power={power} initialValue="m" />;
}

export default LengthPage;

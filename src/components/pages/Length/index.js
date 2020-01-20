import React, { useState } from "react";

import Button from "../../Button";

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { Link } from "react-router-dom";

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
  const [firstValue, setFirstValue] = useState("0");
  const [firstUnit, setFirstUnit] = useState("m");

  const [secondValue, setSecondValue] = useState("0");
  const [secondUnit, setSecondUnit] = useState("m");

  const handleFirstValue = e => {
    setFirstValue(e.currentTarget.value);
    setSecondValue(
      e.currentTarget.value * Math.pow(10, power(secondUnit) - power(firstUnit))
    );
  };

  const handleFirstUnit = e => {
    setFirstUnit(e.currentTarget.value);
    setSecondValue(
      firstValue *
        Math.pow(10, power(secondUnit) - power(e.currentTarget.value))
    );
  };

  const handleSecondValue = e => {
    setSecondValue(e.currentTarget.value);
    setFirstValue(
      e.currentTarget.value * Math.pow(10, power(firstUnit) - power(secondUnit))
    );
  };

  const handleSecondUnit = e => {
    setSecondUnit(e.currentTarget.value);
    setSecondValue(
      firstValue * Math.pow(10, power(e.currentTarget.value) - power(firstUnit))
    );
  };

  return (
    <div className="App">
      <h1>Längd</h1>
      <Link to="/">
        <Button>Tillbaka till startsidan</Button>
      </Link>

      <div>
        <form>
          <div className="input-pair">
            <input
              type="number"
              onChange={handleFirstValue}
              value={firstValue}
            />
            <select onChange={handleFirstUnit}>
              {units.map(unit => {
                return (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input-pair">
            <input
              type="number"
              onChange={handleSecondValue}
              value={secondValue}
            />
            <select onChange={handleSecondUnit}>
              {units.map(unit => {
                return (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <InlineMath>
        {String.raw`${firstValue} \ ${firstUnit} \cdot 10^{${power(secondUnit) -
          power(firstUnit)}} = ${secondValue} \ ${secondUnit}`}
      </InlineMath>
    </div>
  );
}

export default LengthPage;

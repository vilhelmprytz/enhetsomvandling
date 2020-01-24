import React, { useState } from "react";

import Button from "./Button";

import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { Link } from "react-router-dom";

function Core(props) {
  const [firstValue, setFirstValue] = useState("0");
  const [firstUnit, setFirstUnit] = useState(props.initialValue);

  const [secondValue, setSecondValue] = useState("0");
  const [secondUnit, setSecondUnit] = useState(props.initialValue);

  const handleFirstValue = e => {
    setFirstValue(e.currentTarget.value);
    setSecondValue(
      e.currentTarget.value *
        Math.pow(10, props.power(secondUnit) - props.power(firstUnit))
    );
  };

  const handleFirstUnit = e => {
    setFirstUnit(e.currentTarget.value);
    setSecondValue(
      firstValue *
        Math.pow(
          10,
          props.power(secondUnit) - props.power(e.currentTarget.value)
        )
    );
  };

  const handleSecondValue = e => {
    setSecondValue(e.currentTarget.value);
    setFirstValue(
      e.currentTarget.value *
        Math.pow(10, props.power(firstUnit) - props.power(secondUnit))
    );
  };

  const handleSecondUnit = e => {
    setSecondUnit(e.currentTarget.value);
    setSecondValue(
      firstValue *
        Math.pow(
          10,
          props.power(e.currentTarget.value) - props.power(firstUnit)
        )
    );
  };

  return (
    <div className="App">
      <h1>{props.title}</h1>
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
              {props.units.map(unit => {
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
              {props.units.map(unit => {
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
        {String.raw`${firstValue} \ ${firstUnit} \cdot 10^{${props.power(
          secondUnit
        ) - props.power(firstUnit)}} = ${secondValue} \ ${secondUnit}`}
      </InlineMath>
    </div>
  );
}

export default Core;

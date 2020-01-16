import React, { useState } from 'react';

import Button from '../../Button';

import { Link } from "react-router-dom";

const units = ["m", "dm", "cm", "mm"]

function unit_multiplier(first, second) {

}

function LengthPage() {
    const [firstValue, setFirstValue] = useState("0");
    const [firstUnit, setFirstUnit] = useState("");

    const [secondValue, setSecondValue] = useState("0");
    const [secondUnit, setSecondUnit] = useState("");


    const handleFirstValue = (e) => {
        setFirstValue(e.currentTarget.value);
    }

    const handleFirstUnit = (e) => {
        setFirstUnit(e.currentTarget.value);
    }

    const handleSecondValue = (e) => {
        setSecondValue(e.currentTarget.value);
    }

    const handleSecondUnit = (e) => {
        setSecondUnit(e.currentTarget.value);
    }

    return (
        <div className="App">
            <h1>Längd</h1>
            <Link to="/">
                <Button>
                    Tillbaka till startsidan
                </Button>
            </Link>

            <div>
                <form>
                    <div className="input-pair">
                        <input type="number" onChange={handleFirstValue} value={firstValue} />
                        <select onChange={handleFirstUnit}>
                            {units.map(unit => {
                                return (
                                    <option key={unit} value={unit}>{unit}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="input-pair">
                        <input type="number" onChange={handleSecondValue} value={secondValue} />
                        <select onChange={handleSecondUnit}>
                            {units.map(unit => {
                                return (
                                    <option key={unit} value={unit}>{unit}</option>
                                )
                            })}
                        </select>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default LengthPage;
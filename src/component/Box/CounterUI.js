import React, { useState } from "react";
import "./counter.css";

const CounterUI = () => {
  const [inputFirst, setInputFirst] = useState("");
  const [inputSecond, setInputSecond] = useState("");
  const [calc, setCalc] = useState(0);
  const [sign, setSign] = useState("?");

  const handleClick = (e) => {
    setSign(e.target.name);
  };

  const handlePlus = (e) => {
    setCalc(inputFirst + inputSecond);
    setSign(e.target.name);
  };

  const handleMinus = (e) => {
    setCalc(Math.abs(inputFirst - inputSecond));
    setSign(e.target.name);
  };

  const handleMulti = (e) => {
    setCalc(inputFirst * inputSecond);
    setSign(e.target.name);
  };

  const handleDiv = (e) => {
    setCalc(inputFirst / inputSecond);
    setSign(e.target.name);
  };
  return (
    <div className="box">
      <div>
        <div className="input-box">
          <div>
            <input
              placeholder="Enter the First Number"
              type="number"
              onChange={(e) => setInputFirst(Number(e.target.value))}
              value={inputFirst}
            />
          </div>
          <div className="sign">{sign}</div>
          <div>
            <input
              placeholder="Enter the Second Number"
              type="number"
              onChange={(e) => setInputSecond(Number(e.target.value))}
              value={inputSecond}
            />
          </div>
          <div className="calc">= {calc}</div>
        </div>
        <div className="btn">
          <button name="-" onClick={handleMinus}>
            -
          </button>
          <button name="+" onClick={handlePlus}>
            +
          </button>
          <button name="*" onClick={handleMulti}>
            *
          </button>
          <button name="/" onClick={handleDiv}>
            /
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CounterUI;

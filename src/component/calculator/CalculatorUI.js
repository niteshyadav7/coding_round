import React, { useState } from "react";

const CalculatorUI = () => {
  const [res, setRes] = useState("");

  const handleClick = (e) => {
    setRes(res.concat(e.target.name));
  };
  const calulate = () => {
    setRes(eval(res));
  };

  const clear = () => {
    setRes("");
  };

  const cl = () => {
    setRes(res.slice(0, -1));
  };
  return (
    <div className="x">
      <div className="box">
        <div className="input">
          <input type="text" value={res} />
        </div>
        <div className="btn">
          <div>
            <button className="clear" onClick={clear}>
              CLEAR
            </button>
            <button onClick={cl}>C</button>
          </div>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <div className="last">
            <button name="." onClick={handleClick}>
              .
            </button>
            <button name="=" onClick={calulate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorUI;

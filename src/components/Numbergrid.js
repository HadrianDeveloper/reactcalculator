import { useState } from "react";

function Numbergrid() {
  const [count, setCount] = useState("");

  let mathOp = "";

  const mathOpNum = (num) => {
    setCount((currCount) => {
      let expression = "";
      expression += `${currCount}`;
      expression += `${mathOp}`;
      expression += `${num}`;

      return expression;
    });
  };

  function StringEvaluator(str) {
    // console.log(typeof str);
    let result = Function("return " + str)();
    return result;
  }

  return (
    <div className="matrix">
      <div className="equalsbox">
        <h2 id="output">{count} </h2>
      </div>

      <div className="numgrid">
        <div className="box" onClick={() => setCount("")}>
          <p className="clear">C</p>
        </div>

        <div className="box" onClick={() => (mathOp = "+")}>
          <p className="add">+</p>
        </div>

        <div className="box" onClick={() => (mathOp = "-")}>
          <p className="subtract">-</p>
        </div>

        <div className="box" onClick={() => (mathOp = "*")}>
          <p className="times">x</p>
        </div>

        <div className="box" onClick={() => (mathOp = "/")}>
          <p className="divide">/</p>
        </div>

        {/* NUMBERS */}

        <div id="zero" className="box" onClick={() => mathOpNum("0")}>
          <p className="number">0</p>
        </div>

        <div id="one" className="box" onClick={() => mathOpNum("1")}>
          <p className="number">1</p>
        </div>

        <div id="two" className="box" onClick={() => mathOpNum("2")}>
          <p className="number">2</p>
        </div>

        <div className="box" onClick={() => mathOpNum("3")}>
          <p id="three" className="number">
            3
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum("4")}>
          <p id="four" className="number">
            4
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum("5")}>
          <p id="five" className="number">
            5
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum("6")}>
          <p id="six" className="number">
            6
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum("7")}>
          <p id="seven" className="number">
            7
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum("8")}>
          <p id="eight" className="number">
            8
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum("9")}>
          <p id="nine" className="number">
            9
          </p>
        </div>
      </div>

      <div className="equalsbox">
        <div className="box" onClick={() => setCount(StringEvaluator(count))}>
          <p className="equals">=</p>
        </div>
      </div>
    </div>
  );
}

export default Numbergrid;

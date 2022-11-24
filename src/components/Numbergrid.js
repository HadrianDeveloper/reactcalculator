import { useState } from "react";

function Numbergrid() {
  const [count, setCount] = useState(0);

  let mathOp = "";

  const mathOpNum = (num) => {
    setCount((currCount) => {
      let expression = `${currCount} ${mathOp} ${num}`;
      return expression;
    });
  };

  return (
    <div className="matrix">
      <div className="equalsbox">
        <div className="box">
          <marquee>Welcome to our React Calculator</marquee>
        </div>
        <div className="box">
          <h2>Output: {count} </h2>
        </div>
      </div>

      <div className="numgrid">
        <div className="box">
          <p className="clear">C</p>
        </div>

        <div className="box" onClick={() => (mathOp = "+")}>
          <p className="add">+</p>
        </div>

        <div className="box" onClick={() => (mathOp = "-")}>
          <p className="subtract">-</p>
        </div>

        <div className="box" onClick={() => (mathOp = "x")}>
          <p className="times">x</p>
        </div>

        <div className="box" onClick={() => (mathOp = "/")}>
          <p className="divide">/</p>
        </div>

        {/* NUMBERS */}

        <div id="zero" className="box" onClick={() => mathOpNum(0)}>
          <p className="number">0</p>
        </div>

        <div id="one" className="box" onClick={() => mathOpNum(1)}>
          <p className="number">1</p>
        </div>

        <div id="two" className="box" onClick={() => mathOpNum(2)}>
          <p className="number">2</p>
        </div>

        <div className="box" onClick={() => mathOpNum(3)}>
          <p id="three" className="number">
            3
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum(4)}>
          <p id="four" className="number">
            4
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum(5)}>
          <p id="five" className="number">
            5
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum(6)}>
          <p id="six" className="number">
            6
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum(7)}>
          <p id="seven" className="number">
            7
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum(8)}>
          <p id="eight" className="number">
            8
          </p>
        </div>

        <div className="box" onClick={() => mathOpNum(9)}>
          <p id="nine" className="number">
            9
          </p>
        </div>
      </div>

      <div className="equalsbox">
        <div className="box">
          <p className="equals">=</p>
        </div>
      </div>
    </div>
  );
}

// function alerter() {
//   console.log(
//     document.getElementById("zero").innerText,
//     document.getElementById("one").innerText
//   );
// }

export default Numbergrid;

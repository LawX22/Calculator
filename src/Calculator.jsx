import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("");

  function handleInput1Change(e) {
    if (e.target.validity.valid) {
      setInput1(e.target.value);
    }
  }

  function handleInput2Change(e) {
    if (e.target.validity.valid) {
      setInput2(e.target.value);
    }
  }

  function handlePlus() {
    setOperation("+");
  }

  function handleMinus() {
    setOperation("-");
  }

  function handleMultiply() {
    setOperation("*");
  }

  function handleDivide() {
    setOperation("/");
  }

  function handleReset() {
    setInput1("");
    setInput2("");
    setResult(0);
    setOperation("+");
  }

  useEffect(() => {
    let res = 0;
    const num1 = Number(input1);
    const num2 = Number(input2);

    switch (operation) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
      default:
        res = 0;
    }

    setResult(res);
  }, [input1, input2, operation]);

  return (
    <div className="App">
      <form>
        <div className="inputA">
          <h2>A:</h2>
          <input
            type="number"
            pattern="\d*"
            value={input1}
            onChange={handleInput1Change}
          />
        </div>
        <div className="inputB">
          <h2>B:</h2>
          <input
            type="number"
            pattern="\d*"
            value={input2}
            onChange={handleInput2Change}
          />
        </div>

        <div className="title">
          <p>Choose your choice:</p>
        </div>

        <div className="btn-cta">
          <button type="button" onClick={handlePlus}>
            +
          </button>
          <button type="button" onClick={handleMinus}>
            -
          </button>
          <button type="button" onClick={handleMultiply}>
            *
          </button>
          <button type="button" onClick={handleDivide}>
            /
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="footer">
          <h2>Values:</h2>
          <input type="text" value={result} readOnly />
        </div>
      </form>
    </div>
  );
}

export default App;

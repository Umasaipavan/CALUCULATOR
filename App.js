import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  
  const handler = e => {
    setInput(e.target.value);
  }

  // Add function to handle button clicks

  // Add centered heading
  // Place this above the calculator return
  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput("");
      setResult("");
    } else if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  }

  const buttons = [
    ['C', '⌫', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '', '=']
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Display */}
        <div className="display-section">
          <div className="main-display">
            {result || input || "0"}
          </div>
          
          {/* Your original code - keeping it exactly as is */}
          <center>
            <input 
              type="text" 
              value={input} 
              name="input" 
              onChange={handler}
              className="input-field"
              placeholder="Enter calculation"
            />
            <br/>
          
            <br/>
          </center>
        </div>

        {/* Calculator Buttons */}
        <div className="button-grid">
          {buttons.map((row, rowIndex) => 
            row.map((btn, colIndex) => {
              if (btn === '') return <div key={`${rowIndex}-${colIndex}`}></div>;
              
              let buttonClass = "calc-button ";
              
              if (btn === 'C' || btn === '⌫' || btn === '%') {
                buttonClass += "function-button";
              } else if (['+', '-', '*', '/', '='].includes(btn)) {
                buttonClass += "operator-button";
              } else {
                buttonClass += "number-button";
              }
              
              if (btn === '0') {
                buttonClass += " zero-button";
              }
              
              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  className={buttonClass}
                  onClick={() => handleButtonClick(btn)}
                >
                  {btn}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
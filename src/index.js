import ReactDOM from "react-dom";
import React, { useState } from "react";

const INITIAL_STATE = {
  A: { value: "" },
  B: { value: "" },
  C: { value: "" },
  D: { value: "" },
};

function App() {
  const [spreadsheet, setSpreadsheet] = useState(INITIAL_STATE);

  const onChange = (id, value) => {
    setSpreadsheet({
      ...spreadsheet,
      [id]: { value: value },
    });
  };

  /**
   * @param {string} formula - assumed to be string [A-D]+
   */
  const getValue = (formula) => {
    if (!formula) {
      return "";
    }

    const letters = formula.split("");
    console.log("formula", formula);
    return letters
      .map((letter) => {
        return isNaN(parseInt(spreadsheet[letter].value))
          ? getValue(spreadsheet[letter].value)
          : parseInt(spreadsheet[letter].value);
      })
      .reduce((prev, curr) => prev + curr);
  };

  return Object.keys(spreadsheet).map((id) => {
    const value = spreadsheet[id].value;
    const computedValue = isNaN(parseInt(value)) ? getValue(value) : value;

    return (
      <div
        key={id}
        style={{
          border: "1px solid black",
          width: "100px",
          height: "50px",
          padding: "1rem",
        }}
      >
        <label htmlFor="cellValue">{id}</label>
        <input
          name="cellValue"
          type="text"
          value={value}
          onChange={(ev) => onChange(id, ev.target.value)}
          style={{ width: "100px" }}
        />
        {computedValue}
      </div>
    );
  });
}

ReactDOM.render(<App />, document.getElementById("root"));

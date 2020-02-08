import React from 'react';
import './App.css';
import AutoCompleteText from "./AutoCompleteText";

const items = ["Rachel", "Cori", "Nate", "Brenton", "Lindsey"];

function App() {
  return (
    <div className="App">
      <AutoCompleteText items={items} />
    </div>
  );
}

export default App;

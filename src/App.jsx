import "./App.css";
import { useState } from "react";

function App() {
  const [width, setWidth] = useState(40);
  return (
    <div className="App">
      <input
        type="number"
        value={width}
        onChange={(e) => {
          setWidth(e.target.value);
        }}
      />
      <div className="outer">
        <div className="inner" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

export default App;

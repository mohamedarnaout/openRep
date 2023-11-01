import "./App.css";
import Progress from "./components/Progress";
import { useReducer, useState } from "react";
const reducer = (state, action) => {
  if (action.type === "add_full_set") return { hour: state.hour + 1.5 };
  if (action.type === "add_one_set") return { hour: state.hour + 0.5 };
};
function App() {
  const [width, setWidth] = useState(40);
  const initialState = { hour: width };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>hours done: {state.hour}</h1>
      <Progress width={width} setWidth={setWidth} />
      <button onClick={() => dispatch({ type: "add_one_set" })}>
        Add one pomedero set
      </button>
      <button onClick={() => dispatch({ type: "add_full_set" })}>
        Add Full pomedero set
      </button>
    </div>
  );
}

export default App;

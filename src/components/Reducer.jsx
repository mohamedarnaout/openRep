import { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "add_full_set") return { hour: state.hour + 1.5 };
  if (action.type === "add_one_set") return { hour: state.hour + 0.5 };
  return state;
};

function Reducer() {
  const initialState = { hour: 40 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>hours done: {state.hour}</h1>

      <button onClick={() => dispatch({ type: "add_one_set" })}>
        Add one pomedero set
      </button>
      <button onClick={() => dispatch({ type: "add_full_set" })}>
        Add Full pomedero set
      </button>
    </div>
  );
}

export default Reducer;

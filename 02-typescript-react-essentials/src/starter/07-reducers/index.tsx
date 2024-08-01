import { useReducer } from "react";
import { initialState, counterReducer } from "./reducer";

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <h2>Status : {state.status}</h2>
    </div>
  );
}
export default Component;

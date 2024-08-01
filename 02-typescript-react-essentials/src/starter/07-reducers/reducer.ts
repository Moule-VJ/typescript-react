export interface CounterState {
  count: number;
  status: String;
}

export const initialState: CounterState = {
  count: 0,
  status: "IDLE",
};

type UpdateCountAciton = {
  type: "increment" | "decrement" | "reset";
};

type SetStatusAction = {
  type: "set_status";
  payload: "active" | "inactive";
};

type CounterAction = UpdateCountAciton | SetStatusAction;

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: (state.count = 0) };
    case "set_status":
      return { ...state, status: action.payload };
    default:
      const unhandlerActionType: never = action;
      throw new Error(`Unhandled action type: ${unhandlerActionType}`);
      return state;
  }
};

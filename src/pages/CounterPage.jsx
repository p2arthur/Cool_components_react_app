import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUES_TO_COUNT = "add-values";

const reducer = (state, action) => {
  //Using switch to evaluate the action.type of our reducer
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case CHANGE_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case ADD_VALUES_TO_COUNT:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  //Using reducer instead of useState - produce comes from the immer library
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const incrementCounter = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrementCounter = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({ type: CHANGE_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUES_TO_COUNT });
  };

  return (
    <Panel className="my-3">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl">Count is: {state.count}</h2>
        <div className="flex">
          <Button onClick={decrementCounter} danger>
            Decrease counter -
          </Button>
          <Button onClick={incrementCounter} primary>
            Increase counter +
          </Button>
        </div>
        <h3>Add a lot:</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
          action=""
        >
          <input
            onChange={handleChange}
            value={state.valueToAdd || ""}
            className="border p-1 m-3"
            type="number"
          />
          <Button secondary>Add it</Button>
        </form>
      </div>
    </Panel>
  );
}

export default CounterPage;

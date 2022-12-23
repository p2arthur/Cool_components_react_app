import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE_TO_ADD = "change-value-to-add";
const ADD_VALUES = "add-values";

const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT)
    return { ...state, count: state.count + 1 };

  if (action.type === DECREMENT_COUNT)
    return { ...state, count: state.count - 1 };

  if (action.type === CHANGE_VALUE_TO_ADD)
    return { ...state, valueToAdd: action.payload };

  if (action.type === ADD_VALUES)
    return { ...state, count: state.count + state.valueToAdd };

  return state;
};

function CounterPage({ initialCount }) {
  //const [counter, setCounter] = useState(initialCount);
  //const [valueToAdd, setValueToAdd] = useState(0);

  //Using reducer instead of useState
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
    dispatch({ type: ADD_VALUES });

    //setCounter(counter + valueToAdd);
    //setValueToAdd(0)
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

import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const reducer = (state, action) => {};

function CounterPage({ initialCount }) {
  //const [counter, setCounter] = useState(initialCount);
  //const [valueToAdd, setValueToAdd] = useState(0);

  //Using reducer instead of useState
  const [state, dispatch] = useReducer(reducer, {
    counter: initialCount,
    valueToAdd: 0,
  });

  console.log(state);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    //setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //setCounter(counter + valueToAdd);
    //setValueToAdd(0)
  };

  return (
    <Panel className="my-3">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl">Count is: {state.counter}</h2>
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

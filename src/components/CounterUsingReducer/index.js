import { useReducer } from "react";

const CounterUsingReducer = () => {
  // declaring the initial state
  let initialState = { count: 0 };

  const reducer = (state = initialState, action) => {
    // action = {
    //   type: "",
    //   data: "",
    //   //key: value
    // };
    switch (action.type) {
      case "INCREMENT": {
        return { count: state.count + 1 };
      }
      case "DECREMENT": {
        return { count: state.count - 1 };
      }
      case "RESET": {
        return { count: 0 };
      }
      case "INCRMENT_BY_5": {
        return { count: state.count + 5 };
      }

      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter</h2>

      <h3>count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCRMENT_BY_5" })}>
        Increment By 5
      </button>
    </div>
  );
};

export default CounterUsingReducer;

// STEPS for useReducer

// useReducer
// reducing the functionalities into one.

// declare a state variable
// define a function - reducer
// bind together using useReducer

// useReducer returns two things
// 1, stateVariable (named as state)
// 2, funtionToUpdateState (named as dispatch)

// on every event we need to trigger the reducer (dispatching ):
// using Action

// access the state variable
// using state.count

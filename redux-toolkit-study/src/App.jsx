import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./stores/counter";

const App = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  const [inputNumber, setInputNumber] = useState(0);
  const inputChange = useCallback(
    (e) => {
      setInputNumber(Number(e.target.value));
    },
    [inputNumber]
  );
  return (
    <>
      <h1>hello Redux Toolkit</h1>
      <hr />

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        숫자 up
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        숫자 down
      </button>
      <input type="number" onChange={inputChange} defaultValue={inputNumber} />
      <button
        onClick={() => {
          dispatch(incrementByAmount({ count: inputNumber }));
        }}
      >
        인풋값만큼 더하기
      </button>
      <h3>{count}</h3>
    </>
  );
};

export default App;

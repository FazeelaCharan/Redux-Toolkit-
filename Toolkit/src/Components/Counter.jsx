import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="">
        <button
          style={{ padding: 6, margin: 3 }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span style={{ fontSize: "22px" }}>{count}</span>
        <button
          style={{ padding: 6, margin: 3 }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;

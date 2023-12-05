import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { artir, azalt } from "../../Redux/Features/counterSlice";
const CounterSection = () => {
  const count = useSelector((state) => state.counterApp.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={()=>dispatch(artir())}>Increment</button>
        {count}
        <button onClick={()=>dispatch(azalt())}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterSection;

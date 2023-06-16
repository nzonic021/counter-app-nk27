import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../store/counter/slice";

export const IncrementByValue = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const clickHandler = () => {
    dispatch(incrementByAmount(value));
  };

  return (
    <div>
      Increment by:
      <input
        type="number"
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <button onClick={clickHandler}>Do it</button>
    </div>
  );
};

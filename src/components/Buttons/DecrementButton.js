import { useDispatch } from "react-redux";
import { decrement } from "../../store/counter/slice";

export const DecrementButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(decrement());
  };

  return <button onClick={clickHandler}>-</button>;
};

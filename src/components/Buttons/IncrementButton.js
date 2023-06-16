import { useDispatch } from "react-redux";
import { increment } from "../../store/counter/slice";

export const IncrementButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(increment());
  };

  return <button onClick={clickHandler}>+</button>;
};

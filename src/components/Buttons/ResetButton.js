import { useDispatch } from "react-redux";
import { performCounterReset } from "../../store/counter/slice";

export const ResetButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(performCounterReset());
      }}
    >
      Reset
    </button>
  );
};

import { useSelector } from "react-redux";
import {
  selectCounterValue,
  selectIsCounterValueEvenNumber,
} from "../store/counter/selectors";

export const CounterValueDisplay = () => {
  const counterValue = useSelector(selectCounterValue);
  const isDivisible = useSelector(selectIsCounterValueEvenNumber);

  return (
    <>
      <h2>{counterValue}</h2>
      <h4>is Divisible by 2 ? {isDivisible ? "Yes" : "No"}</h4>
    </>
  );
};

import { DecrementButton } from "./Buttons/DecrementButton";
import { IncrementButton } from "./Buttons/IncrementButton";
import { CounterValueDisplay } from "./CounterValueDisplay";
import { IncrementByValue } from "./IncrementByValue";

export const CounterWrapper = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CounterValueDisplay />
      <div>
        <DecrementButton />
        <IncrementButton />
      </div>
      <IncrementByValue />
    </div>
  );
};

import { DecrementButton } from "./Buttons/DecrementButton";
import { IncrementButton } from "./Buttons/IncrementButton";
import { ResetButton } from "./Buttons/ResetButton";
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
        <ResetButton />
        <IncrementButton />
      </div>
      <IncrementByValue />
    </div>
  );
};

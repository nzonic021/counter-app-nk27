import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { CounterWrapper } from "./components/CounterWrapper";
function App() {
  return (
    <Provider store={store}>
      <h1>State management</h1>
      <CounterWrapper />
    </Provider>
  );
}

export default App;

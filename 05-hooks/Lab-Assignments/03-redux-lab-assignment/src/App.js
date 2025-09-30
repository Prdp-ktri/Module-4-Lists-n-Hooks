import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Redux Counter App</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;

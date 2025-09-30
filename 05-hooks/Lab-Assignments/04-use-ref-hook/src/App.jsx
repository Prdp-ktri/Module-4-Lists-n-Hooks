import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  const refValue = useRef(0);

  const updateRef = () => {
    refValue.current += 1;
    console.log("Ref Value updated:", refValue.current);
  };

  return (
    <>
      <div>
        <h1>React useState vd useRef</h1>

        <h2>useState count: {count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment State
        </button>

        <h2>useRef Value (doesn't re-render UI): {refValue.current}</h2>
        <button onClick={updateRef}>Increment Ref</button>

        <p>Component Rendered: {renderCount.current} times</p>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        -
      </button>
      {num}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;

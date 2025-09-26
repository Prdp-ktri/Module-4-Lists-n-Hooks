import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(false);

  const ageCheck = (e) => {
    e.preventDefault();
    if (age > 18) {
      console.log("You can vote!");
    } else {
      console.log("You can not vote");
    }
  };

  return (
    <>
      <div>
        <h3>{age > 18 ? "You can vote" : "You can not vote"}</h3>
        <form onSubmit={ageCheck}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name=""
            id="ageInp"
            placeholder="Enter your age in years"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    </>
  );
}

export default App;

import "./App.css";

const fruits = ["Apple", "Banana", "Citrus", "Dragon Fruit", "Pomegrenate"];

function App() {
  return (
    <div className="App">
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruits, index) => {
          return (
            <li key={index}>
              {fruits}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

import "./App.css";

const users = [
  { id: "001", name: "Avinash" },
  { id: "002", name: "Chanda" },
  { id: "003", name: "Iyer" },
  { id: "004", name: "Jethya" },
  { id: "005", name: "Daya" },
];

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

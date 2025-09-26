import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState([]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const newDetail = {name, email, password};

    setDetails([...details, newDetail]);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} pattern='[a-z0-9.%+-]' name="" minLength={5} maxLength={30} onChange={(e)=>{setName(e.target.value)}} id="nameInp" /><br />
        <label htmlFor="email">Email</label>
        <input type="email" value={email} pattern='[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' name="" onChange={(e)=>{setEmail(e.target.value)}} id="emailInp" /><br />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} pattern='[a-z0-9.%+-]' name="" onChange={(e)=>{setPassword(e.target.value)}} id="passwordInp" /><br />
        <button>Submit</button>
      </form>
      <ul>
        {details.map((detail, index)=>(
          <li key={index}>
            <strong>Name:</strong>{detail.name} <br />
            <strong>Email:</strong>{detail.email} <br />
            <strong>Password:</strong>{detail.password} <br />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

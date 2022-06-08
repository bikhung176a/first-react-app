import logo from "./logo.svg";
import "./App.css";
import Hello from "./hello.js";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Happer",
  lastName: "Perez",
};

function App() {
  const name = "";
  const element = "Hello," + formatName(user);

  return (
    <div className="App">
      <h1>{Hello} </h1>
    </div>
  );
}

export default App;

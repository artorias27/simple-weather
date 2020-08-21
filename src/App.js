import React from "react";
import CheckForm from "./components/CheckForm";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
        <h2 className="text-white">Simple Weather App</h2>
      </nav>
      <CheckForm />
    </div>
  );
}

export default App;

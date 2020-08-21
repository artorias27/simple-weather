import React from "react";
import CheckForm from "./components/CheckForm";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
        <h2 className="text-white">Simple Weather App</h2>
      </nav>
      <CheckForm />
      <Results />
    </div>
  );
}

export default App;

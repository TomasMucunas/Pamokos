import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {isDone ? "Task is done!" : "Task is not done!"}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className={isDone ? "btn btn-success" : "btn btn-danger"}
            onClick={() => setIsDone(!isDone)}
          >
            {isDone ? "Done" : "Mark as done"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

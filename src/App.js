import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (count > 10) {
      setCount(0);
      setMessage("WHOA!!! COOL IT WITH ALL THAT COUNTING!");
    }
  });
  return (
    <div className="App">
      <h1>This is my site</h1>
      {message ? <h2>{message}</h2> : <h2>this is my count {count}</h2>}
      <div>
        <button onClick={() => setCount(count + 1)}>update count</button>
      </div>
    </div>
  );
}

export default App;

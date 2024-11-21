import React, { useState } from "react";
import DisplayCounter from "./DisplayCounter";
import IncrementButton from "./IncrementButton";

export default function Parent() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <DisplayCounter value={counter} />
      <IncrementButton increment={() => setCounter(counter + 1)} />
    </div>
  );
}

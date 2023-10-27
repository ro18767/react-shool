import { useState } from "react";

export function Task1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>количесто нажатий: {count}</p>
      {count >= 5 ? null : (
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      )}
    </div>
  );
}

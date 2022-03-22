import React, { useState, useEffect } from 'react';
import './index.css';

const { myAPI } = window;

export const App = () => {
  const [count, setCount] = useState(0);

  const onCountUp = () => setCount((count) => count + 1);
  const onCountDown = () => setCount((count) => count - 1);

  useEffect(() => {
    myAPI.update(count);
  }, [count]);

  return (
    <div className="container">
      <div className="w-full h-16 bg-blue-300">
        Hello
      </div>
      <h1>{count}</h1>
      <div>
        <button onClick={onCountDown}>&#x25BC;</button>
        <button onClick={onCountUp}>&#x25B2;</button>
      </div>
    </div>
  );
};

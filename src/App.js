// src/App.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './redux/actions';
import './App.css';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Redux Counter</h1>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;

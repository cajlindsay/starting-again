import React, { useState } from 'react';
import Foo from './foo';
import './app.scss';

const { VITE_FOO, VITE_API_1 } = import.meta.env;

export default function App() {
  const [counter] = useState(1);

  return (
    <div id="app">
      <div>
        web 2 <Foo />
        <span />
      </div>
      <div className="foo">{counter.toString()}</div>
      <div>{VITE_API_1}</div>
      <div>{VITE_FOO}</div>
    </div>
  );
}

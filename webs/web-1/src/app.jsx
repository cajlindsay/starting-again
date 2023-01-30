import { useState } from 'react';
import './app.scss';

const { VITE_FOO, VITE_API_1 } = import.meta.env; 

export default function App() {
  const [counter] = useState(1);

  return (
    <div id="app">
      <div>
        Here is the app
      </div>
      <div className="foo">
        {counter.toString()}
      </div>
      <div>
        {VITE_API_1}
      </div>
      <div>
        {VITE_FOO}
      </div>
    </div>
  );
}

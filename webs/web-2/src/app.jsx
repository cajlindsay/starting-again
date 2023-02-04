import axios from 'axios';
import React, { useCallback, useState } from 'react';
import './app.scss';

const { VITE_FOO, VITE_API_URL } = import.meta.env;

export default function App() {
  const [counter] = useState(1);
  const [data, setData] = useState();

  const onCallAPI1 = useCallback(async () => {
    const response = await axios.get(`${VITE_API_URL}/api-1`);
    setData(response.data);
  }, []);

  const onCallAPI2 = useCallback(async () => {
    const response = await axios.get(`${VITE_API_URL}/api-2`);
    setData(response.data);
  }, []);

  return (
    <div id="app">
      <div>web 2</div>
      <div className="foo">{counter.toString()}</div>
      <div>{VITE_FOO}</div>
      <div>
        <button onClick={onCallAPI1}>API 1</button>
        <button onClick={onCallAPI2}>API 2</button>
        {data && <pre>{JSON.stringify(data)}</pre>}
      </div>
    </div>
  );
}

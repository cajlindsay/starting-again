import React, { useCallback, useState } from 'react';
import apiClient from '@starting-again/web-common/src/api-client.js';

import './app.scss';

export default function App() {
  const [data, setData] = useState();

  const onCallAPI1 = useCallback(async () => {
    const response = await apiClient.get('/api-1');
    setData(response.data);
  }, []);

  const onCallAPI2 = useCallback(async () => {
    const response = await apiClient.get('/api-2');
    setData(response.data);
  }, []);

  return (
    <div id="app">
      <div>web 2</div>
      <div>
        <button onClick={onCallAPI1}>API 1</button>
        <button onClick={onCallAPI2}>API 2</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}

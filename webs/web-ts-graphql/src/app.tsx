import React, { useCallback, useState } from 'react';
import axios from 'axios';

import './app.scss';

const { VITE_API_URL } = window.env;

const numDice = 3;
const numSides = 6;
const query = `query RollDice($numDice: Int!, $numSides: Int){
  rollDice(numDice: $numDice, numSides: $numSides)
}`;

export default function App() {
  const [data, setData] = useState();

  const onRollDiceClick = useCallback(async () => {
    const body = { query, variables: { numDice, numSides } };
    const response = await axios.post(`${VITE_API_URL}/graphql-server`, body);
    setData(response.data);
  }, []);

  return (
    <div id="app">
      <div>web ts graphql</div>
      <div>
        <button onClick={onRollDiceClick}>Roll dice</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}

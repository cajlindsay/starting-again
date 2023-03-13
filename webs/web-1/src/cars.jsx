import React, { useCallback, useEffect, useState } from 'react';

import apiClient from '@starting-again/web-common/src/api-client.js';

import './app.scss';

const defaultForm = {
  make: '',
  model: ''
};

export default function CarsList() {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    async function getCars() {
      const { data } = await apiClient.get('/api-1/routes-1/cars');
      setCars(data);
    }

    getCars();
  }, []);

  const [form, setForm] = useState(defaultForm);

  const onSubmit = useCallback(async () => {
    await apiClient.post('/api-1/routes-1/cars', form);
    const { data } = await apiClient.get('/api-1/routes-1/cars');
    setCars(data);
  }, [form]);

  return (
    <div id="cars-list">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        noValidate
        autoComplete="off"
      >
        <label>
          <span>Make</span>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, make: e.target.value })}
          />
        </label>

        <label>
          <span>Model</span>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, model: e.target.value })}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
          </tr>
        </thead>
        {cars && (
          <tbody>
            {cars.map((car) => (
              <tr key={car._id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

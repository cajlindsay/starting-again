import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import TextField from '@starting-again/web-styles/src/components/text-field/text-field.tsx';

import './cars.scss';

const { VITE_API_URL } = window.env;

type Form = {
  make: string;
  model: string;
};

const defaultForm: Form = {
  make: '',
  model: ''
};

export default function CarsList() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    fetchCars();
    return () => {
      //unmount
    };
  }, []);

  const fetchCars = useCallback(
    async function () {
      const query = 'query { cars { make model id } }';
      const response = await gqlQuery(query);
      setCars(response.data.data.cars);
    },
    [setCars]
  );

  const onSubmit = useCallback(
    async function () {
      const query = `mutation createCar($make: String!, $model: String!) {
        createCar(input: { make: $make, model: $model }) { make model id }
      }`;

      await gqlQuery(query, form);
      await fetchCars();
      setForm(defaultForm);
    },
    [form, cars, fetchCars, setForm]
  );

  const onDeleteClick = useCallback(async function (car) {
    const query = `mutation { deleteCar(carId: "${car.id}") { n ok deletedCount }}`;
    await gqlQuery(query);
    await fetchCars();
  }, []);

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
        <TextField
          label="Make"
          value={form.make}
          required
          onChange={(make: string) => setForm({ ...form, make })}
          className="make-input"
        />
        <TextField
          label="Model"
          value={form.model}
          required
          onChange={(model: string) => setForm({ ...form, model })}
          className="model-input"
        />
        <input
          type="submit"
          value="Submit"
          className="btn-primary-medium"
        />
      </form>
      <table className="primary-table">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th />
          </tr>
        </thead>
        {cars && (
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onDeleteClick(car)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

function gqlQuery(query, variables?) {
  return axios.post(`${VITE_API_URL}/graphql-server`, { query, variables });
}

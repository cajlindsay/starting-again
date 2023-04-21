import React, { useCallback, useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

import TextField from '@starting-again/web-styles/src/components/text-field/text-field.tsx';

import './cars.scss';

type Form = {
  make: string;
  model: string;
};

const defaultForm: Form = {
  make: '',
  model: ''
};

const GET_CARS = gql`
  query {
    cars {
      make
      model
      id
    }
  }
`;

const CREATE_CAR = gql`
  mutation createCar($make: String!, $model: String!) {
    createCar(input: { make: $make, model: $model }) {
      make
      model
      id
    }
  }
`;

const DELETE_CAR = gql`
  mutation deleteCar($carId: String!) {
    deleteCar(carId: $carId) {
      n
      ok
      deletedCount
    }
  }
`;

export default function CarsList() {
  const [form, setForm] = useState(defaultForm);

  const getCarsQuery = useQuery(GET_CARS);
  const [createCar, createCarResult] = useMutation(CREATE_CAR, {
    refetchQueries: [{ query: GET_CARS }]
  });
  const [deleteCar, deleteCarResult] = useMutation(DELETE_CAR, {
    refetchQueries: [{ query: GET_CARS }]
  });

  const onSubmit = useCallback(
    async function (e) {
      e.preventDefault();
      await createCar({ variables: form });
      setForm(defaultForm);
    },
    [form, setForm]
  );

  return (
    <div id="cars-list">
      <form
        onSubmit={onSubmit}
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
      {getCarsQuery.error && <div>There was an error getting the cars.</div>}
      {createCarResult.error && <div>There was an error creating the car.</div>}
      {deleteCarResult.error && <div>There was an error deleting the car.</div>}
      <table className="primary-table">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th />
          </tr>
        </thead>
        {getCarsQuery.data?.cars && (
          <tbody>
            {getCarsQuery.data.cars.map((car) => (
              <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteCar({ variables: { carId: car.id } })}
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

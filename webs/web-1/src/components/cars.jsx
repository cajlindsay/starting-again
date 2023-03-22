import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TextField from '@starting-again/web-styles/src/components/text-field/text-field';

import { selectCars, fetchCars, addCar, deleteCar } from '../state/cars';

import './cars.scss';

const defaultForm = {
  make: '',
  model: ''
};

export default function CarsList() {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const [form, setForm] = useState(defaultForm);

  const onSubmit = useCallback(
    async function () {
      await dispatch(addCar(form)).unwrap();
      dispatch(fetchCars());
      setForm(defaultForm);
    },
    [dispatch, form, cars]
  );

  const onDeleteClick = useCallback(
    async function (car) {
      await dispatch(deleteCar(car)).unwrap();
      dispatch(fetchCars());
    },
    [dispatch]
  );

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
          onChange={(make) => setForm({ ...form, make })}
        />
        <TextField 
          label="Model"
          value={form.model}
          required
          onChange={(model) => setForm({ ...form, model })}
        />
        <input
          type="submit"
          value="Submit"
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
              <tr key={car._id}>
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

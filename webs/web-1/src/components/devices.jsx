import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TextField from '@starting-again/web-styles/src/components/text-field/text-field';

import { selectDevices, CREATE, DELETE } from '../state/devices';

import './devices.scss';

const defaultForm = {
  make: '',
  model: ''
};

export default function DevicesList() {
  const items = useSelector(selectDevices);
  const dispatch = useDispatch();

  const [form, setForm] = useState(defaultForm);

  const onSubmit = useCallback(
    async function () {
      await dispatch({ type: CREATE, payload: form }).unwrap();
      setForm(defaultForm);
    },
    [dispatch, form]
  );

  const onDeleteClick = useCallback(
    function (item) {
      dispatch({ type: DELETE, payload: item });
    },
    [dispatch]
  );

  return (
    <div id="devices-list">
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
        {items && (
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.make}</td>
                <td>{item.model}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onDeleteClick(item)}
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

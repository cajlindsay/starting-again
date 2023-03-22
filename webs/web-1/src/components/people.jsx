import React, { useMemo, useState, useCallback } from 'react';
import TextField from '@starting-again/web-styles/src/components/text-field/text-field';

import { useGetPeopleQuery, useAddPersonMutation, useDeletePersonMutation } from '../state/people';

const defaultForm = {
  make: '',
  model: ''
};

export default function PeopleList() {
  const { data: people, isLoading, isSuccess, isError, error, refetch } = useGetPeopleQuery();

  const [addPerson, { isLoading: isAdding }] = useAddPersonMutation();

  const [deletePerson, { isLoading: isDeleting, reset }] = useDeletePersonMutation();

  const sortedPeople = useMemo(() => {
    const s = (people || []).slice();
    s.sort((a, b) => b.familyName > a.familyName);
    return s;
  }, [people]);

  const [form, setForm] = useState(defaultForm);

  const onSubmit = useCallback(
    async function () {
      await addPerson(form).unwrap();
      setForm(defaultForm);
    },
    [form, addPerson]
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
          label="Given name"
          value={form.givenName}
          required
          onChange={(givenName) => setForm({ ...form, givenName })}
        />
        <TextField
          label="Family name"
          value={form.familyName}
          required
          onChange={(familyName) => setForm({ ...form, familyName })}
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
      <table className="primary-table">
        <thead>
          <tr>
            <th>Given name</th>
            <th>Family name</th>
            <th />
          </tr>
        </thead>
        {sortedPeople && (
          <tbody>
            {sortedPeople.map((person) => (
              <tr key={person._id}>
                <td>{person.givenName}</td>
                <td>{person.familyName}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => deletePerson(person)}
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

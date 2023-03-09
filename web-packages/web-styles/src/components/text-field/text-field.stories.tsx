import React, { useState } from 'react';
import type { Story } from '@ladle/react';

import TextField from './text-field';

export const WithPlaceholderAndNotes: Story = () => {
  const [val, setVal] = useState<string | number>('');

  return (
    <TextField
      label="Lorem Ipsum"
      value={val}
      placeholder="Type something here"
      required
      notes="Input notes help to guide the user, which may be a couple of lines long."
      onChange={setVal}
    />
  );
};

export const WithAnError: Story = () => {
  const [val, setVal] = useState<string | number>('This input has an error');

  return (
    <TextField
      label="Lorem Ipsum"
      value={val}
      placeholder="Type something here"
      required
      error="This field is invalid"
      onChange={setVal}
    />
  );
};

export const WithValidatedInput: Story = () => {
  const [val, setVal] = useState<string | number>('This input has been validated');

  return (
    <TextField
      label="Lorem Ipsum"
      value={val}
      placeholder="Type something here"
      required
      validated
      onChange={setVal}
    />
  );
};

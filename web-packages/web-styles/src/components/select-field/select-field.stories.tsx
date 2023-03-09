import React, { useState } from 'react';
import type { Story } from '@ladle/react';

import SelectField from './select-field';

export const WithPlaceholderAndNotes: Story = () => {
  const [val, setVal] = useState<string | number>('');

  return (
    <SelectField
      label="Lorem Ipsum"
      value={val}
      placeholder="Select something from this list"
      required
      notes="Input notes help to guide the user, which may be a couple of lines long."
      onChange={setVal}
    >
      <option value="option 1">Option 1</option>
      <option value="option 2">Option 2</option>
      <option value="option 3">Option 3</option>
      <option value="option 4">Option 4</option>
    </SelectField>
  );
};

export const WithAnError: Story = () => {
  const [val, setVal] = useState<string | number>('This input has an error');

  return (
    <SelectField
      label="Lorem Ipsum"
      value={val}
      placeholder="Select something from this list"
      required
      error="This field is invalid"
      onChange={setVal}
    >
      <option value="option 1">Option 1</option>
      <option value="option 2">Option 2</option>
      <option value="option 3">Option 3</option>
      <option value="option 4">Option 4</option>
    </SelectField>
  );
};

export const WithValidatedInput: Story = () => {
  const [val, setVal] = useState<string | number>('This input has been validated');

  return (
    <SelectField
      label="Lorem Ipsum"
      value={val}
      placeholder="Select something from this list"
      required
      validated
      onChange={setVal}
    >
      <option value="option 1">Option 1</option>
      <option value="option 2">Option 2</option>
      <option value="option 3">Option 3</option>
      <option value="option 4">Option 4</option>
    </SelectField>
  );
};

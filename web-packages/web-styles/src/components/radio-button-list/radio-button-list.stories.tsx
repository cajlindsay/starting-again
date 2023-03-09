import React, { useState } from 'react';
import type { Story } from '@ladle/react';

import RadioButtonList from './radio-button-list';
import Checkbox, { RadioButtonValueType } from '../radio-button/radio-button';

export const BasicExample: Story = () => {
  const [val, setVal] = useState<RadioButtonValueType>('cats');

  return (
    <RadioButtonList
      label="My favorite thing"
      value={val}
      onChange={setVal}
    >
      <Checkbox
        label="Cats"
        value="cats"
      />
      <Checkbox
        label="Ice cream"
        value="ice-cream"
      />
      <Checkbox
        label="Clouds"
        value="clouds"
      />
      <Checkbox
        label="Something else"
        value="other"
      />
    </RadioButtonList>
  );
};

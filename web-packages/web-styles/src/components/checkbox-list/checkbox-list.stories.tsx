import React, { useState } from 'react';
import type { Story } from '@ladle/react';

import CheckboxList from './checkbox-list';
import Checkbox, { CheckboxValueType } from '../checkbox/checkbox';

export const BasicExample: Story = () => {
  const [val, setVal] = useState<CheckboxValueType[]>(['cats', 'clouds']);

  return (
    <CheckboxList
      label="Lorem Ipsum"
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
        label="Other things"
        value="other"
      />
    </CheckboxList>
  );
};

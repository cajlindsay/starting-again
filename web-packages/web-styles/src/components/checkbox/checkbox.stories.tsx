import React, { useState } from 'react';
import type { Story } from '@ladle/react';

import Checkbox from './checkbox';

export const SingleCheckbox: Story = () => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <Checkbox
      label="Lorem Ipsum"
      checked={checked}
      onChange={(_, isChecked) => setChecked(isChecked)}
    />
  );
};

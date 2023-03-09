import React from 'react';
import classnames from 'classnames';
import isEqual from 'lodash/isEqual';

import FormField from '../form-field/form-field';
import { RadioButtonValueType } from '../radio-button/radio-button';

import './radio-button-list.scss';

interface RadioButtonListProps {
  children: React.ReactElement[];
  className?: string;
  onChange: (val: RadioButtonValueType) => void;
  value: RadioButtonValueType;
  disabled?: boolean;
  error?: string;
  label: string;
  notes?: string;
  required?: boolean;
  validated?: boolean;
}

export default function RadioButtonList({
  children,
  className,
  onChange,
  value,
  disabled = false,
  error,
  label,
  notes,
  required = false,
  validated = false
}: RadioButtonListProps) {
  return (
    <FormField
      className={classnames(className, 'radio-button-list')}
      disabled={disabled}
      error={error}
      label={label}
      notes={notes}
      required={required}
      validated={validated}
    >
      <div className="inner-container">
        {React.Children.map(
          children,
          (child) =>
            child &&
            React.cloneElement(child, {
              checked: isEqual(value, child.props.value),
              disabled,
              onChange
            })
        )}
      </div>
    </FormField>
  );
}

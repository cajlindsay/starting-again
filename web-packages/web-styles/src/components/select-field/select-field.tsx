import React from 'react';
import classnames from 'classnames';

import FormField from '../form-field/form-field';

import './select-field.scss';

interface SelectFieldProps {
  className?: string;
  disabled?: boolean;
  children: React.ReactElement[];
  onChange: (val: string | number) => void;
  placeholder?: string;
  value: string | number;
  error?: string;
  label: string;
  notes?: string;
  required?: boolean;
  validated?: boolean;
};

export default function Select({
  children,
  className = '',
  disabled = false,
  onChange,
  placeholder = '',
  value = '',
  error,
  label,
  notes,
  required = false,
  validated
}: SelectFieldProps) {
  return (
    <FormField
      className={classnames(className, 'select-field', { 'has-value': value !== null && value !== '' })}
      disabled={disabled}
      error={error}
      required={required}
      label={label}
      notes={notes}
      validated={validated}
    >
      <select
        className="input-control bordered-control"
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        value={value}
      >
        <option
          className="placeholder"
          value=""
        >
          {placeholder}
        </option>
        {children}
      </select>
    </FormField>
  );
}

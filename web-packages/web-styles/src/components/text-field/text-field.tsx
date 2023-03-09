import React from 'react';
import classnames from 'classnames';

import FormField from '../form-field/form-field';

interface TextFieldProps {
  className?: string;
  disabled?: boolean;
  onChange: (val: string | number) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value: string | number;
  min?: number,
  step?: number,
  autoComplete?: string,
  error?: string;
  label: string;
  notes?: string;
  required?: boolean;
  validated?: boolean;
}

export default function TextField({
  className,
  disabled = false,
  onChange,
  placeholder = '',
  type = 'text',
  value = '',
  min,
  step,
  autoComplete,
  error,
  label,
  notes,
  required = false,
  validated
}: TextFieldProps) {
  return (
    <FormField
      className={classnames('text-field', className)}
      disabled={disabled}
      error={error}
      required={required}
      label={label}
      notes={notes}
      validated={validated}
    >
      <input
        className="input-control bordered-control"
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        spellCheck="false"
        type={type}
        value={value}
        step={step}
        min={min}
        autoComplete={autoComplete}
      />
    </FormField>
  );
}

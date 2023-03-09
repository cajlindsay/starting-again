import React, { useState } from 'react';
import classNames from 'classnames';
import Label from '../label/label';

import './form-field.scss';

interface FormFieldProps {
  children: React.ReactElement;
  className?: string;
  disabled?: boolean;
  error?: string;
  label: string;
  notes?: string;
  required?: boolean;
  validated?: boolean;
}

export default function FormField ({
  children,
  className = '',
  disabled = false,
  error,
  label,
  notes,
  validated = false,
  required = false
}: FormFieldProps) {
  const [
    hasFocus,
    setHasFocus
  ] = useState(false);

  return (
    <div className={classNames(
      className,
      'form-field',
      {
        'has-error': error,
        'has-focus': hasFocus,
        validated,
        disabled
      }
    )}
    >
      <label>
        {React.cloneElement(children, {
          onBlur: () => setHasFocus(false),
          onFocus: () => setHasFocus(true)
        })}
        <Label
          label={label}
          required={required}
        />
      </label>

      {error && (
        <p className="error-message">{error}</p>)}
        
      {notes && (    
        <p className="notes">{notes}</p>)}
    </div>
  );
};

import React, { useCallback } from 'react';
import classnames from 'classnames';

import FormField from '../form-field/form-field';
import { CheckboxValueType } from '../checkbox/checkbox';

import './checkbox-list.scss';

interface CheckboxListProps {
  children: React.ReactElement[];
  className?: string;
  onChange: (val: CheckboxValueType[]) => void;
  value: CheckboxValueType[];
  disabled?: boolean;
  error?: string;
  label: string;
  notes?: string;
  required?: boolean;
  validated?: boolean;
}

export default function CheckboxList({
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
}: CheckboxListProps) {
  const onCheckboxChange = useCallback(
    (checkboxValue: CheckboxValueType, checked: boolean) => {
      const i = value.indexOf(checkboxValue);

      if (i === -1 && checked) {
        onChange([...value, checkboxValue]);
      } else if (i > -1 && !checked) {
        onChange([...value.slice(0, i), ...value.slice(i + 1)]);
      }
    },
    [onChange, value]
  );

  return (
    <FormField
      className={classnames(className, 'checkbox-list')}
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
              checked: value.findIndex((v) => v == child.props.value) > -1,
              disabled,
              onChange: onCheckboxChange
            })
        )}
      </div>
    </FormField>
  );
}

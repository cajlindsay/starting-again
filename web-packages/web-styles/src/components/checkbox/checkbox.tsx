import React from 'react';
import classnames from 'classnames';

import Label from '../label/label';

import './checkbox.scss';

export type CheckboxValueType = string | number;

interface CheckboxProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label: string;
  onBlur?: () => void;
  onChange?: (val: string | number, checked: boolean) => void;
  onFocus?: () => void;
  value?: string | number;
}

export default function Checkbox({
  checked,
  className,
  disabled = false,
  label,
  onBlur,
  onChange,
  onFocus,
  value
}: CheckboxProps) {
  return (
    <label className={classnames(className, 'checkbox')}>
      <input
        checked={checked}
        disabled={disabled}
        onBlur={onBlur}
        onChange={(e) => onChange(value, e.target.checked)}
        onFocus={onFocus}
        type="checkbox"
        value={value}
      />
      <span className="checkbox-square bordered-control ignore-focus" />
      <Label label={label} />
    </label>
  );
}

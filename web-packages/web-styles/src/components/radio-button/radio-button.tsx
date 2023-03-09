import React from 'react';
import classnames from 'classnames';

import Label from '../label/label';

import './radio-button.scss';

export type RadioButtonValueType = string | number;

interface RadioButtonProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label: string;
  onBlur?: () => void;
  onChange?: (val: RadioButtonValueType) => void;
  onFocus?: () => void;
  value?: RadioButtonValueType;
}

export default function RadioButton({
  checked,
  className,
  disabled = false,
  label,
  onBlur,
  onChange,
  onFocus,
  value
}: RadioButtonProps) {
  return (
    <label className={classnames(className, 'radio-button')}>
      <input
        checked={checked}
        disabled={disabled}
        onBlur={onBlur}
        onChange={() => onChange(value)}
        onFocus={onFocus}
        type="radio"
        value={value}
      />
      <span className="outer-circle bordered-control ignore-focus">
        <span className="inner-circle" />
      </span>
      <Label label={label} />
    </label>
  );
}

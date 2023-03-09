import React from 'react';
import classNames from 'classnames';

import './label.scss';

interface LabelProps {
  className?: string;
  label: string;
  required?: boolean;
}

export default function Label({ className, label, required = false }: LabelProps) {
  return (
    label && (
      <div className={classNames(className, 'label')}>
        <span>{label}</span>
        {required && <span>*</span>}
      </div>
    )
  );
}

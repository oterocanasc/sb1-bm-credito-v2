import React, { forwardRef } from 'react';
import InputMask from 'react-input-mask';

interface MaskedInputProps {
  mask: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ mask, value, onChange, placeholder, className }, ref) => (
    <InputMask
      mask={mask}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      inputRef={ref}
    />
  )
);
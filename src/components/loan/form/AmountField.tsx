import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Slider } from '../../ui/Slider';
import { FormField } from './FormField';
import type { SimulationForm } from '../../../types/loan';
import { formatCurrency } from '../../../utils/format';

interface AmountFieldProps {
  control: Control<SimulationForm>;
  error?: FieldError;
}

export const AmountField: React.FC<AmountFieldProps> = ({ control, error }) => (
  <FormField label="Quanto você precisa?" error={error}>
    <Controller
      name="amount"
      control={control}
      render={({ field }) => (
        <Slider
          value={[field.value]}
          onValueChange={([newValue]) => field.onChange(newValue)}
          min={1000}
          max={100000}
          step={100}
          formatValue={(v) => formatCurrency(v)}
        />
      )}
    />
  </FormField>
);
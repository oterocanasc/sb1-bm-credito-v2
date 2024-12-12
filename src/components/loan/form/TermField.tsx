import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Slider } from '../../ui/Slider';
import { FormField } from './FormField';
import type { SimulationForm } from '../../../types/loan';

interface TermFieldProps {
  control: Control<SimulationForm>;
  error?: FieldError;
}

export const TermField: React.FC<TermFieldProps> = ({ control, error }) => (
  <FormField label="Em quantos meses?" error={error}>
    <Controller
      name="term"
      control={control}
      render={({ field }) => (
        <Slider
          value={[field.value]}
          onValueChange={([newValue]) => field.onChange(newValue)}
          min={3}
          max={72}
          step={1}
          formatValue={(v) => `${v} meses`}
        />
      )}
    />
  </FormField>
);
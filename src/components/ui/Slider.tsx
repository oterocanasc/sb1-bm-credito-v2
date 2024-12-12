import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { clsx } from 'clsx';

interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
  formatValue?: (value: number) => string;
  label?: string;
}

export const Slider = ({
  value,
  onValueChange,
  min,
  max,
  step,
  formatValue = (v) => v.toString(),
  label,
}: SliderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <span className="text-2xl font-bold text-blue-600">
          {formatValue(value[0])}
        </span>
      </div>
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={value}
        onValueChange={onValueChange}
        max={max}
        min={min}
        step={step}
      >
        <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-2">
          <SliderPrimitive.Range className="absolute bg-blue-600 rounded-full h-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block w-5 h-5 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </SliderPrimitive.Root>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
};
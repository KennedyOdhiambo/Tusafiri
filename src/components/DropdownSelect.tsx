import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

type DropdownSelectProps = {
  placeholder?: string;
  options: Array<{ value: string; text: string }>;
  label?: string;
};
export default function DropdownSelect({ placeholder, options, label }: DropdownSelectProps) {
  return (
    <div>
      <Label>{label}</Label>
      <Select>
        <SelectTrigger className=" w-[240px] border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

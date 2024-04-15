import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(number: number) {
  if (number < 1000) {
    return number;
  } else if (number < 1000000) {
    return Math.round(number / 1000) + 'K';
  } else {
    return (number / 1000000).toFixed(1) + 'M';
  }
}

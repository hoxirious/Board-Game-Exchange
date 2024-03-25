import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce(callback, delay) {
  let timer = null;
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback();
    }, delay)
  }
}
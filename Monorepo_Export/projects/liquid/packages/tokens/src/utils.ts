import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Architectural glue for merging Tailwind classes with brand tokens.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

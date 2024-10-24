import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattor = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

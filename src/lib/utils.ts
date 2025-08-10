import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSignup = () => {
  const signupSection = document.getElementById("emergency-signup");
  signupSection?.scrollIntoView({ behavior: "smooth" });
};

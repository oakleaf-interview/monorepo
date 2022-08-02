import * as React from "react";

export const Button = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};

interface ButtonProps {
  text: string;
}

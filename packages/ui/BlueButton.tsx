import * as React from "react";

export const BlueButton = ({ text }: ButtonProps) => {
  return <button style={{ background: "blue" }}>{text}</button>;
};

interface ButtonProps {
  text: string;
}

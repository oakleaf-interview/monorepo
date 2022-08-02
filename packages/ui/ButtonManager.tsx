import * as React from "react";
import { Button } from "./Button";
import { BlueButton } from "./BlueButton";

export const ButtonManager = ({ text }: ButtonProps) => {
  if (text.includes("Docs")) {
    return <BlueButton text={text} />;
  } else {
    return <Button text={text} />;
  }
};

interface ButtonProps {
  text: string;
}

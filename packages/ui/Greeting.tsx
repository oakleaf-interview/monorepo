import React, { useState } from "react";

export const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  get(greeting, setGreeting)

  return <h1>{greeting}</h1>;
};

async function get(greeting: any, setGreeting: any) {
  await fetch("https://www.greetingsapi.com/random").then((d: any) =>
    d.json().then((j: any) => !greeting && setGreeting(`${j.greeting} from the Web App!`))
  );
}


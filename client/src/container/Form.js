import React, { useState } from "react";
import { Button } from "../component/Button";
import { login } from "../query/login";

const inputs = [
  {
    name: "Email",
    props: { className: "input-form", type: "email" }
  },
  {
    name: "Password",
    props: { className: "input-form", type: "password" }
  }
];

export const Form = () => {
  const [err, setErr] = useState(false);

  return (
    <form id="form">
      <p>Connexion</p>
      {inputs.map(({ name, props }, i) => (
        <div key={i}>
          <label>{name}</label>
          <input {...props} />
        </div>
      ))}
      <p id="error">{err}</p>
      <Button setErr={setErr} login={login}>
        Submit
      </Button>
    </form>
  );
};

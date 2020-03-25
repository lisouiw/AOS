import React from "react";

export const Button = ({ setErr, login }) => (
  <input
    className="button-form"
    type="button"
    value="submit"
    onClick={() => login(setErr)}
  />
);

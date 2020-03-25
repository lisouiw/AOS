import React from "react";
import { Link } from "react-router-dom";

export const Message = ({ msg }) => (
  <div id="message">
    <Link id="message-link" to="/">
      <div>HOME</div>
    </Link>
    <p id="message-text">{msg}</p>
  </div>
);

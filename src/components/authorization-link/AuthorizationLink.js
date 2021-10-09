import React from "react";
import { Link } from "react-router-dom";

function AuthorizationLink() {
  return (
    <Link to="/contacts" className="authorization-link">
      Контакты
      <div className="authorization-link__icon" />
    </Link>
  );
}

export default AuthorizationLink;

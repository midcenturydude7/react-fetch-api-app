import React from "react";
import Button from "./Button";

function Header({ getUsers }) {
  return (
    <nav className="navbar">
      <Button getUsers={getUsers} value="users" />
      <Button value="posts" />
      <Button value="comments" />
    </nav>
  );
}

export default Header;

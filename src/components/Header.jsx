import React from "react";
import Button from "./Button";

function Header() {
  return (
    <nav className="navbar">
      <Button value="users" />
      <Button value="posts" />
      <Button value="comments" />
    </nav>
  );
}

export default Header;

import React from "react";

function Button({ value, getUsers }) {
  return (
    <>
      <button className="btn" type="text" onClick={() => getUsers()}>
        {value}
      </button>
    </>
  );
}

export default Button;

import React from "react";
import classes from "./Button.module.css";

function Button({ value }) {
  return (
    <div className={classes.ButtonContainer}>
      <button className={classes.Button}>
        <p>{value}</p>
      </button>
    </div>
  );
}

export default Button;

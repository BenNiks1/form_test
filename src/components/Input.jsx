import React from "react";

export const Input = React.forwardRef((props, ref) => (
  <React.Fragment>
    {props.title && <p className="form__input-title">{props.title}</p>}
    <input
      className="form__input"
      ref={ref}
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      type={props.type}
      error={props.error}
      helpertext={props.helpertext}
    />
  </React.Fragment>
));

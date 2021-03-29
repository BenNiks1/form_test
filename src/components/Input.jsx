import React from "react";
import classnames from "classnames";

export const Input = React.forwardRef((props, ref) => (
  <div>
    {props.title && <p className="form__input-title">{props.title}</p>}
    <input
      className={classnames("form__input", { error: props.error })}
      ref={ref}
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      type={props.type}
      error={props.error}
    />
  </div>
));

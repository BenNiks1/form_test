import React from "react";
import classnames from "classnames";

export const Select = React.forwardRef((props, ref) => (
  <select
    name={props.id}
    id={props.id}
    defaultValue={props.defaultValue}
    ref={ref}
    error={props.error}
    className={classnames("form__select", { error: props.error })}
  >
    {props.options.map(({ value, disabled, id, defaultValue }) => (
      <option
        disabled={disabled}
        value={defaultValue ? defaultValue : value}
        key={id}
      >
        {value}
      </option>
    ))}
  </select>
));

import React from "react";

export const Select = React.forwardRef((props, ref) => (
  <select
    name={props.id}
    id={props.id}
    defaultValue={props.defaultValue}
    ref={ref}
    className="form__select"
  >
    {props.options.map(({ value, disabled, id, defaultValue}) => (
      <option
        disabled={disabled}
        value={defaultValue?defaultValue:value}
        key={id}
      >
        {value}
      </option>
    ))}
  </select>
));

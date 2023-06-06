import React from "react";

const InputFeild = ({
  id,
  className,
  value,
  disabled,
  type,
  change,
  placeholder,
  label,
  labelClass,
  name,
  Err,
}) => {
  return (
    <>
      <div className="my-2 form-group">
        <label htmlFor={id} className={`form-label ${labelClass}`}>
          {label}
        </label>
        <input
          type={type}
          className={className}
          value={value}
          id={id}
          name={name}
          disabled={disabled || null}
          onChange={change || null}
          placeholder={placeholder || null}
        />
      </div>
      {Err ? <span className="text-danger">{Err}</span> : ""}
    </>
  );
};

export default InputFeild;

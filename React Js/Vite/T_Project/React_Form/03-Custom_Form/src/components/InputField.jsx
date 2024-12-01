import React from "react";

function InputField({ Label, id, name, value, onChange, errors }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{Label}</label>
      <input
        id={id}
        name={name}
        className="border border-black px-2"
        value={value}
        onChange={onChange}
      />
      <p className="error">{errors}</p>
    </div>
  );
}

export default InputField;

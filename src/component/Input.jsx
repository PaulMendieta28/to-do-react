import React from "react";

function Input(props) {
  const { onChange, type, value, checked } = props;
  return (
    <input 
      className="task-input"
      type={type} 
      onChange={onChange} 
      value={value} 
      checked={checked} />
  );
}
export default Input;

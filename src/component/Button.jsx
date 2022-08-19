import React from "react";

function Button(props) {
  const { onClick, text, type } = props;
  
  return (
    <button 
      className="task-button"
      type={type} 
      onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;

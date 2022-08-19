import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Form (props) {
  const { addTask } = props;
  const [inputValue, setInputValue] = useState("");
  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  const onClick = (event) => {
    event.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <form className="task-form">
      <Input 
        className="task-input"
        value={inputValue} 
        onChange={onChange} 
        type="text" 
      />
      <Button 
        className="task-button"
        type="submit" 
        onClick={onClick} 
        text="add" 
      />
    </form>
  );
}
export default Form;

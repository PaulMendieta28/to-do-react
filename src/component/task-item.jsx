import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const TaskItem = (props) => {
  const { item, deleteTask, toggleComplete, list, setList } = props;
  const [isEditing, setisEditing] = useState(false);
  const [editingText, setEditingText] = useState("");


  const handleEdit = () => {
    setisEditing(true);
    setEditingText(item.text);
  };

  const handleCheck = () => {
    toggleComplete(item.id);
  };

  const handleDelete = () => {
    deleteTask(item.id);
  };

  const handleEditSubmit = () => {
    setisEditing(false);
    const updateList = [...list];
    const index = updateList.findIndex((task) => item.id === task.id);
    const itemUpdate = updateList[index];
    updateList.splice(index, 1, { ...itemUpdate, text: editingText });
    setList(updateList);
    localStorage.setItem("todolist", JSON.stringify(updateList));
  };

  const onChange = (event) => {
    const text = event.target.value;
    setEditingText(text);
  };

  const renderContent = () => {
    if (isEditing)
      return (
        <>
          <Input 
            className="task-input"
            type="text" 
            onChange={onChange} 
            value={editingText} 
          />
          <Button 
            type="button" 
            onClick={handleEditSubmit} 
            text="save" 
          />
        </>
      );
    return (
      <>
        <span className="task-title">
          {item.text}
        </span>
        <Button 
          className="task-button"
          type="button" 
          onClick={handleEdit} 
          text="Edit" 
        />
      </>
    );
  };

  return (
    <div key={item.id}>
      <Input 
        className="task-input"
        type="checkbox" 
        onChange={handleCheck} 
        checked={item.complete} 
      />
      {renderContent()}
      <Button 
        className="task-button"
        type="button" 
        onClick={handleDelete} 
        text="Delete" 
      />
    </div>
  );
};

export default TaskItem;

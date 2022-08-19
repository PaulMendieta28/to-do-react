import React from 'react'
import  TaskItem  from './task-item';

const TaskList = (props) => {
  const {list, deleteTask, toggleComplete, setList}= props;

  const Items = ()=> {
    return (
      list?.map(item=> <TaskItem 
        className="task-container"
        item={item} 
        key={item.id} 
        deleteTask={deleteTask}  
        toggleComplete={toggleComplete} 
        list={list} 
        setList={setList} />));
  }
  return (
    <div className='task-containerlist'>
      <h2 className='task-title second'>List Task</h2>
      <ul className='task-container'>
        {Items()}
      </ul>
    </div>
  )
}
export default TaskList;

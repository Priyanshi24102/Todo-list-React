import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [isEditing,setIsEditing]=useState(false);
  const [currentTask, setCurrentTask]=useState('');

  const addTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };
  
  const editTask = (index) => {
    setIsEditing(index);
    setCurrentTask(taskList[index]);
  };

  const saveTask = (index) => {
    const updatedTasks = taskList.map((task, i) => (i === index ? currentTask : task));
    setTaskList(updatedTasks);
    setIsEditing(null);
    setCurrentTask('');
  };


  return (
    <div>
      <div className="container">
        <div className="todoContainer">
          <input
            type="text"
            placeholder="Enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className='taskbtn' onClick={addTask}>Add Task</button>
          <ul className="tasks">
            {taskList.map((task, index) => (
              <div className='taskli' key={index}>
                { isEditing === index ? (
                  <input
                    type="text"
                    value={currentTask}
                    onChange={(e) => setCurrentTask(e.target.value)}
                  />
                ) : (
                  <li>{task}</li>
                )}

              
              <div >            
              {isEditing === index ? (
                    <button className="saveBtn btn" onClick={() => saveTask(index)}>Save</button>
                  ) : (
                    <>
                      <button className="updateBtn btn" onClick={() => editTask(index)}>Update</button>
                      <button className="removeBtn btn" onClick={() => document.querySelector(".taskli").remove()}>Remove</button>
                    </>
                  )}
              </div>

              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;

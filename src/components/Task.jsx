import Card from "./card";
import Input from "./input";
import { useEffect, useState } from "react";

const Task = () => {
  const initial_task = [];

  const [Task, setTask] = useState(initial_task);

  const addTaskHandler = async (newTask) => {
    const newTaskobj = {
      task_id: Math.random(),
      task_name: newTask
    };

    const response = await fetch("https://todo-backend-5fyq.onrender.com/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTaskobj)
    })
    if (response.status === 201) {
      getTask();
      alert("New Task Added Successfully");
    }
    else {
      alert("Failed to add task")
    }
  }

  const deleteTaskHandler = async (taskId) => {
    const response = await fetch("https://todo-backend-5fyq.onrender.com/" + taskId, {
      method: "DELETE"
    })
    if (response.status === 200) {
      getTask();
      alert("Task Deleted")
    }
    else {
      alert("Failed to delete task")
    }
  }

  const getTask = async () => {
    const response = await fetch("https://todo-backend-5fyq.onrender.com");
    const taskList = await response.json();
    console.log(taskList);
    setTask(taskList)
  }

  useEffect(() => { getTask() }, [])

  return (
    <div id="task">
      <Input onAddTask={addTaskHandler} />
      {
        Task.map((tk) => (<Card task={tk}
          onDeleteTask={deleteTaskHandler} />))
      }
    </div>
  )
}
export default Task;
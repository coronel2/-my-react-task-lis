import Task from "./task";


const TaskList = ({ tasks, toggleTask }) => {

    return (
      <div>

        <ul>
          {tasks.map(task => (
            <Task
              key={task.id}
              name={task.name}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
            />
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;
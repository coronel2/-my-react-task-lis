

const  Task=({ task })=>  {
  return (
    <li>
      <span>{task.name}</span>
      {task.status ? <span>✔️</span> : <span>❌</span>}
    </li>
  );
};

export default Task;
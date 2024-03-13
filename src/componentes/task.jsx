const Task = ({ name, completed, onToggle }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {name}
        </span>
      </div>
    );
  };
  
  export default Task;
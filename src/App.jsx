import Header from '../src/componentes/header'
import { useState } from 'react';
import TaskList from './componentes/tasklist';
const App = () => {
  // Definir el estado inicial de las tareas
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Hacer la compra', completed: false },
    { id: 2, name: 'Lavar los platos', completed: true },
    { id: 3, name: 'Limpiar la casa', completed: false }
  ]);

  // Función para cambiar el estado de una tarea
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
     <Header/>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
};

export default App;

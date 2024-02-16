
import Header from "./components/Header";
import TaskList from "./components/TaskList"



function App() {
  const tasks= [
    { id: 1, name: " Aprender React", status: false },
    { id: 2, name: " Aprender Css", status: true },
    { id: 3, name: " Aprender Javascript", status: false },
  ];
console.log(App ());
  return (
    <div>
      <Header/>
      <TaskList task={tasks} />
    </div>
  );
}
export default App;
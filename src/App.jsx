import AddTodo from "./components/AddTodo";
import Todos from "./components/Todo";
import "./app.css";

function App() {
  return (
    <div className="container ">
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

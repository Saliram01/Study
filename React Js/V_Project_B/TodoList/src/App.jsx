import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="border w-50 p-3 m-auto mt-5 bg-white shadow-lg">
      <AppName title="Dodo React App" />
      <AddTodo />

      <div className="items-container">
        <TodoItem title="By Milk" date="4/10/2024" btnName="Delete" />
        <TodoItem title="Go To School" date="5/10/2024" btnName="Delete" />
      </div>
    </center>
  );
}

export default App;

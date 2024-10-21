import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Todo from "./types/Todo";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    //populate todo
    async function getTodos() {
      ///https://dummyjson.com/todos'
      const response = await fetch("http://localhost:3004/todos");
      const data = await response.json();
      updateCounts(data);
    }

    getTodos();
  }, []);

  const onChangeAll = (isChecked: boolean) => {
    const newTodos = todos!.map((todo) => {
      return { ...todo, completed: isChecked };
    });

    updateCounts(newTodos);
  };

  const addTodo = (task: string) => {
    const newTodo = {
      id: uuidv4(),
      todo: task,
      completed: false,
      userId: 1,
    } as Todo;

    updateCounts([newTodo, ...todos]);
  };

  const onChecked = (id: number | string, completed: boolean) => {
    const newTodos = todos!.map((todo) => {
      if (todo.id === id) return { ...todo, completed };
      else return todo;
    });

    updateCounts(newTodos);
  };

  const updateCounts = (newTodos: Todo[]) => {
    setTodos(newTodos);
    setTotalCount(newTodos.length);
    const selectedItems = newTodos.filter((t) => t.completed);
    setSelectedCount(selectedItems.length);
  };

  const onDeleteItem = (id: number | string) => {
    const newTodos = todos!.filter((todo) => {
      return todo.id !== id;
    });
    updateCounts(newTodos);
  };

  const deleteItems = () => {
    const newTodos = todos!.filter((todo) => {
      return !todo.completed;
    });
    updateCounts(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <h1>TODO list workshop</h1>
        <Header addTodo={addTodo} />
        <Main todos={todos} onChecked={onChecked} onDelete={onDeleteItem} />
        <Footer
          totalCount={totalCount}
          selectedCount={selectedCount}
          onChangeAll={onChangeAll}
          deleteSelectedItems={deleteItems}
        />
      </div>
    </div>
  );
}

export default App;

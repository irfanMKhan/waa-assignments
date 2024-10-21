
import Item from "../Item";
import Todo from "../../types/Todo";

import "./index.css";

type PropType = {
  todos: Todo[];
  onChecked: (id: number | string, completed: boolean) => void;
  onDelete: (id: number | string) => void;
};

const main = (props: PropType) => {
  const { todos, onChecked, onDelete } = props;
  return (
    <ul className="todo-main">
      {todos.map((todo, index) => (
        <Item key={todo.id} todo={todo} onChecked={onChecked} onDelete={onDelete} />
      ))
      }
    </ul>
  );
};

export default main;

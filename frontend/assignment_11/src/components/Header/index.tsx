import { KeyboardEvent } from "react";

import "./index.css";

type PropType = {
  addTodo: (task: string) => void;
};

const header = (props: PropType) => {
  const keyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Enter pressed");
      const value = e.currentTarget.value;
      props.addTodo(value);
      console.log(value);

      e.currentTarget.value = "";
    }
  };
  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter task name" onKeyUp={keyUpHandler} />
    </div>
  );
};

export default header;
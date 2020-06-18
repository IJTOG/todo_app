import React from "react";
import { getTodos } from "../lib/api";
import { removeToken } from "../lib/auth";
import Todolist from "../components/Todo/todoList";

function Todo() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getTodos();
        setTodos(data);
      } catch (err) {
        removeToken();
        window.location.href = "/login";
      }
    };

    fetchData();
  }, []);

  return <Todolist todos={todos} />;
}

export default Todo;

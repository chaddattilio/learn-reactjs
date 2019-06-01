import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

function App() {
  const todosDataItems = todosData.map(item => (
    <TodoItem key={item.id} todo={item} />
  ));

  return <div className="todo-list">{todosDataItems}</div>;
}

export default App;

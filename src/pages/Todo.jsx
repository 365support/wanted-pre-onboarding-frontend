/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getTodoApi } from "../api/todo";
import TodoCreate from "../component/todo/todoCreate";
import TodoHeader from "../component/todo/todoHeader";
import TodoList from "../component/todo/todoList";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";
import TodoContextWrapper from "../context/TodoContext";

const Todo = () => {
  useAuth();

  const [todoData, setTodoData] = useState();

  useEffect(() => {
    const getData = () => {
      getTodoApi()
        .then((res) => {
          setTodoData(res.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getData();
  }, []);

  return (
    <section css={mainContainer}>
      <TodoHeader />
      <TodoContextWrapper>
        <TodoCreate todoData={todoData} setTodoData={setTodoData} />
        <TodoList />
      </TodoContextWrapper>
    </section>
  );
};

export default Todo;

/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getTodoApi } from "../api/todo";
import TodoCreate from "../component/todo/todoCreate";
import TodoHeader from "../component/todo/todoHeader";
import TodoList from "../component/todo/todoList";
import useAuth from "../hooks/useAuth";
import { mainContainer } from "../shared/globalStyle";

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
          console.log("주 에러 : ", err);
        });
    };
    getData();
  }, []);

  return (
    <div css={mainContainer}>
      <TodoHeader />
      <TodoCreate todoData={todoData} setTodoData={setTodoData} />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
};

export default Todo;

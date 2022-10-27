/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTodoApi } from "../api/todo";
import TodoCreate from "../component/todo/todoCreate";
import TodoHeader from "../component/todo/todoHeader";
import TodoList from "../component/todo/todoList";
import { mainContainer } from "../shared/globalStyle";

const Todo = () => {
  let navigate = useNavigate();

  const [todoData, setTodoData] = useState();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/");
    }
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

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTodoApi } from "../api/todo";
import TodoCreate from "../component/todo/TodoCreate";
import TodoHeader from "../component/todo/TodoHeader";
import TodoList from "../component/todo/TodoList";

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

const mainContainer = css`
  width: 350px;
  height: 530px;
  background: red;
  overflow: hidden;
  background: linear-gradient(to bottom, #26224f, #302b63, #26224f);
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

export default Todo;

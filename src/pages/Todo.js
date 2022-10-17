/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTodoApi } from "../api/todo";
import TodoCreate from "../component/todo/TodoCreate";
import TodoHeader from "../component/todo/TodoHeader";
import TodoList from "../component/todo/TodoList";

function Todo() {
  let navigate = useNavigate();

  const [todoData, setTodoData] = useState();
  console.log("todoData", todoData);

  useEffect(() => {
    if (!window.localStorage.getItem("access_token")) {
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
}

const mainContainer = css`
  width: 350px;
  height: 530px;
  background: red;
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
    no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

export default Todo;

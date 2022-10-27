/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from "react";
import { getTodoApi } from "../../../api/todo";
import { dispatchContext, todoContext } from "../../../context/TodoContext";
import TodoItem from "../todoItem";
import { todoWrapper } from "./style";

const TodoList = () => {
  const todoData = useContext(todoContext);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const getData = () => {
      getTodoApi()
        .then((res) => {
          dispatch({ type: "INIT", initTodos: res.data });
        })
        .catch((err) => {
          console.log("주 에러 : ", err);
        });
    };
    getData();
  }, []);

  return (
    <article css={todoWrapper}>
      {todoData?.map((list) => (
        <TodoItem key={list.id} list={list} />
      ))}
    </article>
  );
};

export default TodoList;

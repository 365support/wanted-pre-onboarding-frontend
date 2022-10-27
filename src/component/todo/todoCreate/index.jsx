/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { createTodoApi } from "../../../api/todo";
import {
  todoCreateButtonCss,
  todoCreateContainer,
  todoCreateInputCss,
} from "./style";

const TodoCreate = ({ todoData, setTodoData }) => {
  const inputRef = useRef();

  const handleCreatedTodo = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    createTodoApi(inputRef.current.value)
      .then((res) => {
        inputRef.current.value = "";
        setTodoData([...todoData, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleCreatedTodo} css={todoCreateContainer}>
      <input
        autoFocus
        placeholder="todo List"
        css={todoCreateInputCss}
        ref={inputRef}
      />
      <button css={todoCreateButtonCss}>추가</button>
    </form>
  );
};

export default TodoCreate;

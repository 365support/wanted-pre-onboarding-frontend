/** @jsxImportSource @emotion/react */
import { useContext, useRef } from "react";
import { createTodoApi } from "../../../api/todo";
import { dispatchContext } from "../../../context/TodoContext";
import { todoCreateButtonCss, todoCreateContainer, todoCreateInputCss } from "./style";

const TodoCreate = () => {
  const inputRef = useRef();

  const dipatch = useContext(dispatchContext);
  const handleCreatedTodo = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    createTodoApi(inputRef.current.value)
      .then((res) => {
        inputRef.current.value = "";
        dipatch({ type: "ADD", todo: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleCreatedTodo} css={todoCreateContainer}>
      <input autoFocus placeholder="todo List" css={todoCreateInputCss} ref={inputRef} />
      <button css={todoCreateButtonCss}>추가</button>
    </form>
  );
};

export default TodoCreate;

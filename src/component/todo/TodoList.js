/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { deleteTodoApi, updateTodoApi } from "../../api/todo";
import TodoItem from "./TodoItem";

const TodoList = ({ todoData, setTodoData }) => {
  const handleTodoUpdate = (content) => {
    updateTodoApi(content.id, content.todo, content.isCompleted)
      .then(() => {
        const idx = todoData.findIndex((list) => list.id === content.id);
        setTodoData([
          ...todoData.slice(0, idx),
          content,
          ...todoData.slice(idx + 1),
        ]);
      })
      .catch((err) => {
        console.log("주 에러 : ", err);
      });
  };

  const handleTodoDelete = (id) => {
    deleteTodoApi(id)
      .then(() => {
        const newData = todoData.filter((data) => data.id !== id);
        setTodoData(newData);
      })
      .catch((err) => {
        console.log("주 에러 : ", err);
      });
  };

  return (
    <div css={todoWrapper}>
      {todoData?.map((list, id) => (
        <TodoItem
          key={list.id}
          list={list}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
    </div>
  );
};

const todoWrapper = css`
  overflow: auto;
  height: 70%;
`;

export default TodoList;

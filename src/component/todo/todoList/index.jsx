/** @jsxImportSource @emotion/react */
import { useCallback } from "react";
import { deleteTodoApi, updateTodoApi } from "../../../api/todo";
import TodoItem from "../todoItem";
import { todoWrapper } from "./style";

const TodoList = ({ todoData, setTodoData }) => {
  const handleTodoUpdate = useCallback(
    (content) => {
      updateTodoApi(content.id, content.todo, content.isCompleted)
        .then(() => {
          const idx = todoData.findIndex((list) => list.id === content.id);
          setTodoData([...todoData.slice(0, idx), content, ...todoData.slice(idx + 1)]);
        })
        .catch((err) => {
          console.log("주 에러 : ", err);
        });
    },
    [todoData]
  );

  const handleTodoDelete = useCallback(
    (id) => {
      deleteTodoApi(id)
        .then(() => {
          const newData = todoData.filter((data) => data.id !== id);
          setTodoData(newData);
        })
        .catch((err) => {
          console.log("주 에러 : ", err);
        });
    },
    [todoData]
  );

  return (
    <div css={todoWrapper}>
      {todoData?.map((list) => (
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

export default TodoList;

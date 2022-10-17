/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { css } from "@emotion/react";
import { deleteTodoApi, updateTodoApi } from "../../api/todo";

function TodoList({ todoData, setTodoData }) {
  const inputRef = useRef(null);
  const updateinputRef = useRef(null);

  const [active, setActive] = useState(false);
  const [selectId, setSelectId] = useState();
  const [checked, setChecked] = useState(false);

  console.log("todoData", todoData);

  const handleComplete = (id) => {
    const updata = updateinputRef.current.value;
    updateTodoApi(id, updata, checked)
      .then((res) => {
        const idx = todoData.findIndex((list) => list.id === id);
        setTodoData([
          ...todoData.slice(0, idx),
          res.data,
          ...todoData.slice(idx + 1),
        ]);
        setActive(false);
      })
      .catch((err) => {
        console.log("주 에러 : ", err);
      });
  };

  const handleTest = (e, item) => {
    const todo = item.todo;
    const isCompleted = e.target.checked;

    updateTodoApi(item.id, todo, isCompleted)
      .then((res) => {
        const idx = todoData.findIndex((list) => list.id === item.id);
        setTodoData([
          ...todoData.slice(0, idx),
          res.data,
          ...todoData.slice(idx + 1),
        ]);
        setActive(false);
      })
      .catch((err) => {
        console.log("주 에러 : ", err);
      });
  };

  const handleTodoDelete = (id) => {
    deleteTodoApi(id)
      .then((res) => {
        const newData = todoData.filter((data) => data.id !== id);
        setTodoData(newData);
        // const idx = todoData.findIndex((list) => list.id === id);
        // setTodoData([...todoData.slice(0, idx), ...todoData.slice(idx + 1)]);
      })
      .catch((err) => {
        console.log("주 에러 : ", err);
      });
  };

  const handleTodoUpdata = (id) => {
    setActive(true);
    setSelectId(id);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div css={test}>
      {todoData?.map((item, id) => (
        <div key={id} css={todoListContainer}>
          {active && item.id === selectId ? (
            <>
              <input
                type="checkbox"
                defaultChecked={item.isCompleted}
                onClick={handleChecked}
              />
              <input
                ref={updateinputRef}
                defaultValue={item.todo}
                autoFocus
                css={inputCss}
              />
              <button onClick={() => handleComplete(item.id)} css={buttonCss}>
                완료
              </button>
              <button onClick={() => setActive(false)} css={buttonCss}>
                취소
              </button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                defaultChecked={item.isCompleted}
                checked={item.isCompleted}
                onChange={(e) => handleTest(e, item)}
              />
              <div
                css={css`
                  ${inputCss};
                  text-decoration: ${item.isCompleted ? "line-through" : null};
                `}
              >
                {item.todo}
              </div>
              <button onClick={() => handleTodoUpdata(item.id)} css={buttonCss}>
                수정
              </button>
              <button onClick={() => handleTodoDelete(item.id)} css={buttonCss}>
                삭제
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

const test = css`
  overflow: auto;
  height: 70%;
`;

const todoListContainer = css`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

const inputCss = css`
  width: 38%;
  background-color: #e0dede;
  justify-content: center;
  display: flex;
  margin-right: 10px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  word-break: break-all;
`;

const buttonCss = css`
  color: #fff;
  font-weight: bold;
  background-color: #573b8a;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  white-space: pre-line;
  text-align: center;
`;

export default TodoList;

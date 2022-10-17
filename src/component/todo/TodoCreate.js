/** @jsxImportSource @emotion/react */
import axios from "axios";
import { useCallback, useRef } from "react";
import { css } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import notice from "../../utils/noticeUtils";

function TodoCreate({ todoData, setTodoData }) {
  const ref = useRef();

  const onChange = useCallback((e) => {
    ref.current = { ...ref.current, [e.target.name]: e.target.value };
  }, []);

  const handleUpdateTodo = (e) => {
    if (!ref.current) return;
    e.preventDefault();
    const { todoCreate } = ref.current;

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/todos`,
        { todo: todoCreate },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "access_token"
            )}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        e.target.reset();
        setTodoData([...todoData, response.data]);
      })
      .catch((err) => console.log("주 에러 : ", err));
  };

  return (
    <form onSubmit={handleUpdateTodo} css={todoCreateContainer}>
      <input
        autoFocus
        name="todoCreate"
        onChange={onChange}
        placeholder="todo List"
        css={inputCss}
      />
      <button css={buttonCss}>추가</button>
      <ToastContainer position="top-right" />
    </form>
  );
}

const todoCreateContainer = css`
  margin: 10px 0px;
  justify-content: center;
  display: flex;
`;

const inputCss = css`
  width: 56%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin-right: 10px;
  /* margin: 20px auto; */
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const buttonCss = css`
  color: #fff;
  padding: 10px;
  font-weight: bold;
  background-color: #573b8a;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
`;

export default TodoCreate;

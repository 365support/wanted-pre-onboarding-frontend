/** @jsxImportSource @emotion/react */
import { memo, useCallback, useState } from "react";
import { css } from "@emotion/react";
import { MdDone } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import notice from "../../utils/noticeUtils";
import { COLOR } from "../../shared/style";

const TodoItem = ({ list, handleTodoUpdate, handleTodoDelete }) => {
  const [modifyTogle, setModifyTogle] = useState(false);
  const [content, setContent] = useState(list);

  const onInputChange = useCallback((e) => {
    setContent({ ...content, todo: e.target.value });
  }, []);

  const onCheckClick = () => {
    setContent({ ...content, isCompleted: !list.isCompleted });
    handleTodoUpdate({ ...content, isCompleted: !list.isCompleted });
  };

  const handleCompleteBtnClick = () => {
    if (!content.todo) {
      notice("error", "할 일을 입력해 주세요");
      return;
    }
    handleTodoUpdate(content);
    setModifyTogle(false);
  };

  const handleCancelBtnClick = () => {
    setContent({ ...content, todo: list.todo });
    setModifyTogle(false);
  };

  return (
    <div css={todoListContainer}>
      {modifyTogle ? (
        <>
          <div
            css={css`
              ${CheckCircle}
              visibility: hidden;
            `}
          ></div>
          <input
            defaultValue={list.todo}
            autoFocus
            css={inputCss}
            onChange={onInputChange}
          />
          <button onClick={handleCompleteBtnClick} css={customButton}>
            완료
          </button>
          <button css={basicButton} onClick={handleCancelBtnClick}>
            취소
          </button>
        </>
      ) : (
        <>
          <div
            css={css`
              ${CheckCircle}
              border : ${list.isCompleted
                ? ` 1px solid ${COLOR.White100}`
                : ""};
              color: ${list.isCompleted ? `${COLOR.White100}` : ""};
            `}
            onClick={(e) => onCheckClick(e)}
          >
            {list.isCompleted && <MdDone />}
          </div>
          <div
            css={css`
              ${inputCss};
              text-decoration: ${list.isCompleted ? "line-through" : null};
            `}
          >
            {content.todo}
          </div>

          <button onClick={() => setModifyTogle(true)} css={customButton}>
            수정
          </button>
          <button
            css={basicButton}
            onClick={() => {
              handleTodoDelete(content.id);
            }}
          >
            삭제
          </button>
        </>
      )}
      <ToastContainer position="top-right" />
    </div>
  );
};

const todoListContainer = css`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

const inputCss = css`
  width: 36%;
  background-color: ${COLOR.White200};
  justify-content: center;
  display: flex;
  margin-right: 10px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  word-break: break-all;
`;

const basicButton = css`
  color: ${COLOR.White100};
  font-weight: bold;
  background-color: ${COLOR.Purple200};
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

const customButton = css`
  ${basicButton}
  background-color: ${COLOR.Purple100};
`;

const CheckCircle = css`
  width: 22px;
  height: 22px;
  border-radius: 16px;
  border: 1px solid ${COLOR.White200};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 7px;
  cursor: pointer;
`;

export default memo(TodoItem);

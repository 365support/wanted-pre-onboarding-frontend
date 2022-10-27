/** @jsxImportSource @emotion/react */
import { memo, useCallback, useContext, useState } from "react";
import { MdDone } from "@react-icons/all-files/md/MdDone";
import { ToastContainer } from "react-toastify";
import notice from "../../../utils/noticeUtils";
import * as todoItemStyle from "./style";
import { dispatchContext } from "../../../context/TodoContext";
import { deleteTodoApi, updateTodoApi } from "../../../api/todo";

const TodoItem = ({ list }) => {
  const [modifyToggle, setModifyToggle] = useState(false);
  const [content, setContent] = useState(list);

  const dispatch = useContext(dispatchContext);

  const handleTodoUpdate = useCallback(
    (content) => {
      updateTodoApi(content.id, content.todo, content.isCompleted)
        .then((res) => {
          dispatch({ type: "EDIT", todo: res.data });
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    [list, content]
  );

  const handleTodoDelete = useCallback(
    (id) => {
      deleteTodoApi(id)
        .then((res) => {
          dispatch({ type: "DELETE", id });
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    [list]
  );

  const onInputChange = useCallback(
    (e) => {
      setContent({ ...content, todo: e.target.value });
    },
    [content]
  );

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
    setModifyToggle(false);
  };

  const handleCancelBtnClick = () => {
    setContent({ ...content, todo: list.todo });
    setModifyToggle(false);
  };

  return (
    <div css={todoItemStyle.todoListContainer}>
      {modifyToggle ? (
        <>
          <div css={todoItemStyle.hiddencheckCircle}></div>
          <input
            defaultValue={list.todo}
            autoFocus
            css={todoItemStyle.inputCss}
            onChange={onInputChange}
          />
          <button onClick={handleCompleteBtnClick} css={todoItemStyle.customButton}>
            완료
          </button>
          <button css={todoItemStyle.basicButton} onClick={handleCancelBtnClick}>
            취소
          </button>
        </>
      ) : (
        <>
          <todoItemStyle.CheckBox isCompleted={list.isCompleted} onClick={(e) => onCheckClick(e)}>
            {list.isCompleted && <MdDone />}
          </todoItemStyle.CheckBox>
          <todoItemStyle.ContentDiv isCompleted={list.isCompleted}>
            {content.todo}
          </todoItemStyle.ContentDiv>

          <button onClick={() => setModifyToggle(true)} css={todoItemStyle.customButton}>
            수정
          </button>
          <button
            css={todoItemStyle.basicButton}
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

export default memo(TodoItem);

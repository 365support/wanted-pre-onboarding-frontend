/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router";

function TodoHeader() {
  const navigate = useNavigate();

  return (
    <div css={labelCss}>
      <label> Todo List</label>
      <button
        css={logoutBtnCss}
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        로그아웃
      </button>
    </div>
  );
}
const labelCss = css`
  color: #fff;
  font-size: 2.3em;
  justify-content: space-between;
  display: flex;
  margin: 30px 40px;
  font-weight: bold;
`;

const logoutBtnCss = css`
  background-color: #573b8a;
  color: #fff;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default TodoHeader;

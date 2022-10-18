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
          localStorage.removeItem("access_token");
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
  margin: 30px 35px;
  font-weight: bold;
`;

const logoutBtnCss = css`
  background-color: #e0dede;
  color: #573b8a;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default TodoHeader;

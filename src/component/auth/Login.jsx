/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import { css } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import { loginApi } from "../../api/auth";
import notice from "../../utils/noticeUtils";
import useSignForm from "../../hooks/useSignForm";
import * as authSytle from "./authStyle";
import { COLOR } from "../../shared/style";

const Login = ({ isShown, onOpen }) => {
  const navigate = useNavigate();
  const {
    userInfo,
    handleInputValue,
    emailIsAbled,
    emailWarnList,
    passwordIsAbled,
    passwordWarnList,
  } = useSignForm();

  const handleLoginClick = () => {
    loginApi(userInfo.email, userInfo.password)
      .then((res) => {
        notice("success", "로그인 성공");
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        notice("error", err.response.data.message);
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        css={css`
          ${loginContainer}
          transform: ${!isShown ? "translateY(20px)" : "translateY(-290px)"};
        `}
      >
        <label aria-hidden="true" onClick={onOpen} css={labelCss}>
          Login
        </label>
        <input
          css={authSytle.inputCss}
          type="text"
          placeholder="Email"
          required=""
          onChange={handleInputValue("email")}
        />
        <input
          css={authSytle.inputCss}
          type="password"
          placeholder="Password"
          required=""
          onChange={handleInputValue("password")}
        />
        <div css={errorWrapper}>
          {emailWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
          {passwordWarnList?.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>

        <button
          onClick={handleLoginClick}
          disabled={!emailIsAbled || !passwordIsAbled}
          css={css`
            ${authSytle.buttonCss}
            background-color: ${!emailIsAbled || !passwordIsAbled
              ? "gray"
              : `${COLOR.Purple200}`};
          `}
        >
          Login
        </button>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
};

const loginContainer = css`
  height: 460px;
  background: ${COLOR.White100};
  border-radius: 60% / 10%;
  transition: 0.8s ease-in-out;
`;

const labelCss = css`
  ${authSytle.labelCss}
  color: ${COLOR.Purple200};
  padding-top: 15px;
`;

const errorWrapper = css`
  ${authSytle.errorWrapper}
  color: ${COLOR.Purple200};
`;

export default Login;

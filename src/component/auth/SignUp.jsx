/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import notice from "../../utils/noticeUtils";
import { signUpApi } from "../../api/auth";
import useSignForm from "../../hooks/useSignForm";
import * as authSytle from "./authStyle";
import { COLOR } from "../../shared/style";

const SignUp = ({ onOpen, onClose }) => {
  const {
    userInfo,
    handleInputValue,
    emailIsAbled,
    emailWarnList,
    passwordIsAbled,
    passwordWarnList,
  } = useSignForm();

  const handleSignUpClick = (e) => {
    e.preventDefault();
    signUpApi(userInfo.email, userInfo.password)
      .then(() => {
        e.target.reset();
        notice("success", "회원가입 성공");
        onOpen();
      })
      .catch((err) => {
        notice("error", err.response.data.message);
      });
  };

  return (
    <form onSubmit={handleSignUpClick}>
      <label aria-hidden="true" css={labelCss} onClick={onClose}>
        Sign up
      </label>

      <input
        type="text"
        placeholder="Email"
        required=""
        css={authSytle.inputCss}
        onChange={handleInputValue("email")}
      />
      <input
        type="password"
        placeholder="Password"
        required=""
        css={authSytle.inputCss}
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
        disabled={!emailIsAbled || !passwordIsAbled}
        css={css`
          ${authSytle.buttonCss}
          background-color: ${!emailIsAbled || !passwordIsAbled
            ? "gray"
            : `${COLOR.Purple200}`};
        `}
      >
        Sign up
      </button>
      <ToastContainer position="top-right" />
    </form>
  );
};

const labelCss = css`
  ${authSytle.labelCss}
  color: ${COLOR.White100};
`;

const errorWrapper = css`
  ${authSytle.errorWrapper}
  color: ${COLOR.White100};
`;

export default SignUp;

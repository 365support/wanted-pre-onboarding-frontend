/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import {
  validationEmail,
  validationPassword,
} from "../../utils/validationUtils";
import notice from "../../utils/noticeUtils";
import { signUpApi } from "../../api/auth";

function SignUp({ onOpen, onClose }) {
  const [active, setActive] = useState(true);
  const [emailErr, setEmailErr] = useState();
  const [passwordErr, setPasswordErr] = useState();

  const ref = useRef();

  const onChange = useCallback((e) => {
    ref.current = { ...ref.current, [e.target.name]: e.target.value };
    const { email, password } = ref.current;
    const emailWarnText = validationEmail(email);
    const passwodrWarnText = validationPassword(password);

    setPasswordErr(passwodrWarnText);
    setEmailErr(emailWarnText);
  }, []);

  useEffect(() => {
    if (passwordErr?.length === 0 && emailErr?.length === 0) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [passwordErr, emailErr]);

  const handleSignUpClick = (e) => {
    if (!ref.current) return;
    e.preventDefault();
    const { email, password } = ref.current;

    signUpApi(email, password)
      .then((res) => {
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
        name="email"
        placeholder="Email"
        required=""
        css={inputCss}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required=""
        css={inputCss}
        onChange={onChange}
      />

      <div css={errorWrapper}>
        {emailErr?.map((item) => (
          <div key={item}>{item}</div>
        ))}
        {passwordErr?.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <button
        disabled={active}
        css={css`
          ${buttonCss}
          background-color: ${active ? "gray" : "#573b8a"};
        `}
      >
        Sign up
      </button>
      <ToastContainer position="top-right" />
    </form>
  );
}

const errorWrapper = css`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  font-size: 15px;
  margin: auto;
`;

const labelCss = css`
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;

const inputCss = css`
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const buttonCss = css`
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
`;

export default SignUp;

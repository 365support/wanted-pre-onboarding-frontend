/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { css } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import {
  validationEmail,
  validationPassword,
} from "../../utils/validationUtils";
import notice from "../../utils/noticeUtils";
import { loginApi } from "../../api/auth";

function Login({ isShown, onOpen }) {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
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

  const handleLoginClick = () => {
    if (!ref.current) return;
    const { email, password } = ref.current;

    loginApi(email, password)
      .then((res) => {
        console.log(res);
        notice("success", "로그인 성공");
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err);
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
          css={inputCss}
          type="text"
          name="email"
          placeholder="Email"
          required=""
          onChange={onChange}
        />
        <input
          css={inputCss}
          type="password"
          name="password"
          placeholder="Password"
          required=""
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
          onClick={handleLoginClick}
          disabled={active}
          css={css`
            ${buttonCss}
            background-color: ${active ? "gray" : "#573b8a"};
          `}
        >
          Login
        </button>
      </form>
      <ToastContainer position="top-right" />
    </>
  );
}

const errorWrapper = css`
  color: #573b8a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  font-size: 15px;
  margin: auto;
`;

const loginContainer = css`
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transition: 0.8s ease-in-out;
`;

const labelCss = css`
  color: #573b8a;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  padding-top: 15px;
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
  :hover {
    background: #6d44b8;
  }
`;

export default Login;

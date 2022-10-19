/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useIsShown } from "../hooks/useIsShown";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";

const Auth = () => {
  const [isShown, onOpen, onClose] = useIsShown();

  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, []);

  return (
    <div css={mainContainer}>
      <SignUp onOpen={onOpen} onClose={onClose} />
      <Login isShown={isShown} onOpen={onOpen} />
    </div>
  );
};

const mainContainer = css`
  width: 350px;
  height: 530px;
  background: red;
  overflow: hidden;
  background: linear-gradient(to bottom, #26224f, #302b63, #26224f);
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

export default Auth;

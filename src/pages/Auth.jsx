/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useIsShown } from "../hooks/useIsShown";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";
import { mainContainer } from "../shared/globalStyle";

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

export default Auth;

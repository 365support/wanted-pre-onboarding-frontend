/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useIsShown } from "../hooks/useIsShown";
import { mainContainer } from "../shared/globalStyle";
import Login from "../component/auth/login";
import SignUp from "../component/auth/signUp";

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

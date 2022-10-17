/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useIsShown } from "../hooks/useIsShown";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";

function Auth() {
  const [isShown, onOpen, onClose] = useIsShown();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (window.localStorage.getItem("access_token")) {
  //     navigate("/todo");
  //   }
  // }, []);

  return (
    <div css={mainContainer}>
      <SignUp onOpen={onOpen} onClose={onClose} />
      <Login isShown={isShown} onOpen={onOpen} />
    </div>
  );
}

const mainContainer = css`
  width: 350px;
  height: 530px;
  background: red;
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
    no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

export default Auth;

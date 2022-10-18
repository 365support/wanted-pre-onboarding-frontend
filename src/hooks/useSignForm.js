import { useCallback, useState } from "react";
import useValidatedEmail from "./useValidatedEmail";
import useValidatedPassword from "./useValidatedPassword";

const useSignForm = () => {
  const [emailIsAbled, emailWarnList, oncheckEmail] = useValidatedEmail();
  const [passwordIsAbled, passwordWarnList, oncheckPassword] =
    useValidatedPassword();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = useCallback(
    (key) => (e) => {
      setUserInfo({ ...userInfo, [key]: e.target.value });

      if (key === "email") oncheckEmail(e.target.value);
      if (key === "password") oncheckPassword(e.target.value);
    },
    [userInfo]
  );

  return {
    userInfo,
    setUserInfo,
    handleInputValue,
    emailIsAbled,
    emailWarnList,
    passwordIsAbled,
    passwordWarnList,
  };
};

export default useSignForm;

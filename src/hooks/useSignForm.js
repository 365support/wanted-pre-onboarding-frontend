import { useCallback, useState } from "react";
import useValidate from "./useValidate";

const useSignForm = () => {
  const [emailIsAbled, emailWarnList, oncheckEmail] = useValidate("email");
  const [passwordIsAbled, passwordWarnList, oncheckPassword] =
    useValidate("password");

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

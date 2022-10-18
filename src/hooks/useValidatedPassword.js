import { useState } from "react";

const useValidatedPassword = () => {
  const [passwordIsAbled, setPasswordIsAbled] = useState(false);
  const [passwordWarnList, setPasswordWarnList] = useState([]);

  const oncheckPassword = (password) => {
    const warnList = [];
    if (!password) {
      return setPasswordIsAbled(false);
    }
    const regaxForValAuth = {
      moreThanEightLength: {
        warnText: "비밀번호는 8글자 이상이어야 합니다.",
        fn: new RegExp("(?=.{8,})"),
      },
    };
    for (const [key, value] of Object.entries(regaxForValAuth)) {
      if (!value.fn.test(password)) {
        warnList.push(value.warnText);
      }
    }
    setPasswordWarnList(warnList);

    if (warnList.length > 0) {
      setPasswordIsAbled(false);
    } else {
      setPasswordIsAbled(true);
    }
  };

  return [passwordIsAbled, passwordWarnList, oncheckPassword];
};

export default useValidatedPassword;

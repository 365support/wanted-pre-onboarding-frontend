export const validationPassword = (password) => {
  const warnList = [];
  const regaxForValSignUp = {
    moreThanEightLength: {
      warnText: "비밀번호는 8글자 이상이어야 합니다.",
      fn: new RegExp("(?=.{8,})"),
    },
  };
  for (const [key, value] of Object.entries(regaxForValSignUp)) {
    if (!value.fn.test(password)) {
      warnList.push(value.warnText);
    }
  }
  return warnList;
};

export const validationEmail = (email) => {
  const warnList = [];
  const regaxForValSignUp = {
    includeAt: {
      warnText: "이메일에는 @가 포함되어야 합니다.",
      fn: new RegExp("@"),
    },
  };
  for (const [key, value] of Object.entries(regaxForValSignUp)) {
    if (!value.fn.test(email)) {
      warnList.push(value.warnText);
    }
  }
  return warnList;
};

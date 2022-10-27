import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTodoApi } from "../api/todo";

const useAuth = () => {
  const navigate = useNavigate();

  // 원래는 토큰이 맞는지 확인해야 하지만
  // 토큰 인증하는 api 가 없어서 getTodoApi로 대체
  useEffect(() => {
    const getData = () => {
      getTodoApi()
        .then((res) => {
          navigate("/todo");
        })
        .catch((err) => {
          navigate("/");
        });
    };
    getData();
  }, []);

  return;
};

export default useAuth;

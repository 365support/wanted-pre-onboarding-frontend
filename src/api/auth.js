import { apiClient } from "./client";

export const loginApi = async (email, password) => {
  return apiClient.post("/auth/signin", { email, password });
};

export const signUpApi = async (email, password) => {
  return apiClient.post("/auth/signup", { email, password });
};

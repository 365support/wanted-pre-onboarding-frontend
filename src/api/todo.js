import { apiClient } from "./client";

export const getTodoApi = async () => {
  return apiClient.get("/todos");
};

export const updateTodoApi = async (id, todo, isCompleted) => {
  return apiClient.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async (id) => {
  return apiClient.delete(`/todos/${id}`);
};

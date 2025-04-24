import api from "../api";

export const user = () => {
  const signIn = async ({ login, password }) => {
    return await api.post("/users/login", { login, password });
  };

  const current = async () => {
    return await api.get("/users");
  };

  return {
    signIn,
    current,
  };
};

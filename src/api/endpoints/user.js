import api from "../api";

export const user = () => {
  const signIn = async ({ login, password }) => {
    return await api.post("/users/login", { login, password });
  };

  const register = async ({ name, login, description, password }) => {
    return await api.post("/users/register", {
      name,
      login,
      description,
      password,
    });
  };

  const getUserById = async (id) => {
    return await api.get(`/users/${id}`);
  };

  const current = async () => {
    return await api.get("/users");
  };

  return {
    signIn,
    current,
    getUserById,
    register,
  };
};

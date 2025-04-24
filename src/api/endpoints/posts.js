import api from "../api";

export const posts = () => {
  const getAll = async () => {
    return await api.get("/posts");
  };

  const getById = async (id) => {
    return await api.get(`/posts/${id}`);
  };

  const like = async (id) => {
    return await api.post(`/posts/${id}/like`);
  };

  const unlike = async (id) => {
    return await api.post(`/posts/${id}/unlike`);
  };

  const liked = async (id) => {
    return await api.get(`/posts/${id}/liked`);
  };

  return {
    getAll,
    like,
    unlike,
    liked,
    getById,
  };
};

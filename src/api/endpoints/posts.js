import api from "../api";

export const posts = () => {
  const getAll = async () => {
    return await api.get("/posts");
  };

  const like = async (id) => {
    return await api.get(`/posts/${id}/like`);
  };

  const unlike = async (id) => {
    return await api.get(`/posts/${id}/unlike`);
  };

  const liked = async (id) => {
    return await api.get(`/posts/${id}/liked`);
  };

  return {
    getAll,
    like,
    unlike,
    liked,
  };
};

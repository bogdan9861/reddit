import api from "../api";

export const posts = () => {
  const getAll = async (title = "", tags = "") => {
    return await api.get(`/posts?title=${title}&tags=${tags}`);
  };

  const post = async (data) => {
    return await api.post(`/posts`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
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
    post,
    getAll,
    like,
    unlike,
    liked,
    getById,
  };
};

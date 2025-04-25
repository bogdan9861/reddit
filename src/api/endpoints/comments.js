import api from "../api";

export const comments = () => {
  const send = async ({ postId, text }) => {
    return await api.post("/comments/", { postId, text });
  };

  return {
    send,
  };
};

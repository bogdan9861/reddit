import api from "../api";

export const tags = () => {
  const getAllTags = async () => {
    return await api.get("/tags");
  };

  return {
    getAllTags,
  };
};

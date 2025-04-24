import { posts } from "./endpoints/posts";
import { user } from "./endpoints/user";

export const service = () => {
  const { getAll, getById, like, liked, unlike } = posts();
  const { signIn, current } = user();

  return {
    posts: {
      getAll,
      getById,
      like,
      unlike,
      liked,
    },
    user: {
      signIn,
      current,
    },
  };
};

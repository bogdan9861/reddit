import { posts } from "./endpoints/posts";
import { user } from "./endpoints/user";

export const service = () => {
  const { getAll, like, liked, unlike } = posts();
  const { signIn, current } = user();

  return {
    posts: {
      getAll,
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

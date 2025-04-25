import { posts } from "./endpoints/posts";
import { user } from "./endpoints/user";
import { comments } from "./endpoints/comments";
import { tags } from "./endpoints/tags";

export const service = () => {
  const { getAll, post, getById, like, liked, unlike } = posts();
  const { signIn, register, getUserById, current } = user();
  const { send } = comments();
  const { getAllTags } = tags();

  return {
    posts: {
      getAll,
      post,
      getById,
      like,
      unlike,
      liked,
    },
    user: {
      signIn,
      getUserById,
      current,
      register,
    },
    comments: {
      send,
    },
    tags: {
      getAllTags,
    },
  };
};

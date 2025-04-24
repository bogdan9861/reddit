import React, { useEffect, useState } from "react";

import { service } from "../../api/service";

import "./Feed.scss";
import Post from "../post/Post";

const Feed = () => {
  const [data, setData] = useState([]);

  const { posts } = service();
  const { getAll } = posts;

  useEffect(() => {
    getAll().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="feed">
      <div className="feed__list">
        {data?.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;

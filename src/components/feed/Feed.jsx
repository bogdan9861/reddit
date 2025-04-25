import React, { use, useEffect, useState } from "react";

import { service } from "../../api/service";

import "./Feed.scss";
import Post from "../post/Post";
import { useSearchParams } from "react-router-dom";

const Feed = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { posts } = service();
  const { getAll } = posts;

  useEffect(() => {
    const title = searchParams.get("title");
    const tags = searchParams.get("tags");

    getAll(title || "", tags || "").then((res) => {
      setData(res.data);
    });
  }, [searchParams.get("title"), searchParams.get("tags")]);

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

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { service } from "../api/service";

const Me = () => {
  const { user } = service();
  const { current } = user;

  const navigate = useNavigate();

  useEffect(() => {
    current()
      .then((res) => {
        const id = res.data.data.id;

        navigate(`/profile/${id}`);
      })
      .catch((e) => {
        navigate("/?window=login");
      });
  }, []);

  return <div>Me</div>;
};

export default Me;

import React, { useEffect, useState } from "react";
import { Modal, Switch } from "antd";
import Games from "../../assets/icons/Games";
import News from "../../assets/icons/News";
import Discussions from "../../assets/icons/Discussions";
import { service } from "../../api/service";

import "./AddTagsModal.scss";

const AddTagsModal = ({ open, setOpen, selectedTags, setSelectedTags }) => {
  const [tagsData, setTagsData] = useState([]);

  const { tags } = service();
  const { getAllTags } = tags;

  useEffect(() => {
    getAllTags().then((res) => {
      console.log(res.data);

      setTagsData(res.data);
    });
  }, []);

  const onSetTag = (checked, currentTag) => {
    if (checked) {
      setSelectedTags([...selectedTags, currentTag]);
    } else {
      const arr = selectedTags.filter((tag) => tag.id !== currentTag.id);
      setSelectedTags(arr);
    }
  };

  const icons = [
    <Games color="#fff" size={20} />,
    <News color="#fff" size={20} />,
    <Discussions color="#fff" size={20} />,
  ];

  return (
    <Modal open={open} onCancel={() => setOpen()} footer={false}>
      <div className="tagsModal">
        <h1 className="tagsModal__title">Добавить теги</h1>

        <ul className="tagsModal__list">
          {tagsData?.map((tag, i) => (
            <li className="tagsModal__item" key={tag.id}>
              <div className="tagsModal__item-content">
                {icons[i]}
                <span className="tagsModal__item-text">{tag.name}</span>
              </div>

              <Switch onChange={(checked) => onSetTag(checked, tag)} />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default AddTagsModal;

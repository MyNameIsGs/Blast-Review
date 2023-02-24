import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const TagChip = ({ tag, handelSelect, index }) => {
  return (
    <button
      className={`btn btn-${tag.selected ? "success" : "primary"}`}
      onClick={() => {
        handelSelect(tag, index);
      }}
    >
      {tag.title}
    </button>
  );
};

export const Private = () => {
  const { store, actions } = useContext(Context);
  const { user } = store;
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}/api/tags`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { result } = await resp.json();
    console.log(result);
    const filteredTags = result.map((tag) => {
      return {
        ...tag,
        selected: user.tags.some((userTag) => userTag.id === tag.id),
      };
    });
    setTags(filteredTags);
  };

  useEffect(() => {
    getTags();
  }, []);

  const handelSelect = (tag, index) => {
    const copyTags = tags;

    copyTags[index].selected = !tag.selected;
    setTags([...copyTags]);
  };

  return (
    <div className="text-center">
      <h1>Hello there {user?.username}!</h1>
      <h3>Select your interests</h3>
      <div className="w-50 m-auto">
        <div className="rounded bg-light p-3 d-flex justify-content-evenly flex-wrap">
          {tags.map((tag, i) => (
            <TagChip
              key={`${tag.id}-${tag.title}`}
              tag={tag}
              index={i}
              handelSelect={handelSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

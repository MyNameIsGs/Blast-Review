import React, { useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Context } from "../store/appContext";
import TagPill from "../component/tagPill";
import "../../styles/home.css";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const { user } = store;
  const [tags, setTags] = useState([]);
  const [initial, setInitial] = useState([]);
  const [submitting, setSubmitting] = useState(null);
  const token = localStorage.getItem("jwt-token");

  const getTags = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}/api/tags`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { result } = await resp.json();

    const filteredTags = result.map((tag) => {
      return {
        ...tag,
        selected: user.tags.some((userTag) => userTag.id === tag.id),
      };
    });
    const initialTags = filteredTags.map((t) => { return { ...t } });
    setInitial([...initialTags]);
    setTags([...filteredTags]);
  };

  useEffect(() => {
    getTags();
  }, []);

  const handelSelect = (tag, index) => {
    const copyTags = tags;

    copyTags[index].selected = !tag.selected;
    setTags([...copyTags]);
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const resp = await fetch(`${process.env.BACKEND_URL}/api/user/${user.id}/tag`, {
        method: "PUT",
        body: JSON.stringify({
          tags: tags.filter((t) => t.selected).map((t) => t.id)
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      console.log(resp.ok);
      console.log(resp.status);

      const data = await resp.json();
      console.log(data);
      setSubmitting(false);
      if (resp.ok) {
        toast.success(`Tags saved succesfully!`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

        actions.storeUser(data.result);
        const initialTags = tags.map((t) => { return { ...t } });
        setInitial([...initialTags]);
      } else {
        toast.error(data.msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
    } catch (e) {
      console.log(e);
      toast.error(e, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setSubmitting(false);
    }
  }

  return (
    <div className="text-center">
      <h1>Hello there {user?.username}!</h1>
      <h3>Select your interests</h3>
      <div>
        <h4>All our tags</h4>
        <div className="w-25 m-auto">
          <div className="rounded bg-light p-3 d-flex justify-content-evenly flex-wrap">
            {tags.map((tag, i) => !tag.selected && (
              <TagPill
                key={`${tag.id}-${tag.title}`}
                title={tag.title}
                onClick={() => handelSelect(tag, i)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
        <h4>Your tags</h4>
        <div className="w-25 m-auto">
          <div className="rounded bg-light p-3 d-flex justify-content-evenly flex-wrap">
            {tags.map((tag, i) => tag.selected && (
              <TagPill
                key={`${tag.id}-${tag.title}`}
                title={tag.title}
                onClick={() => handelSelect(tag, i)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
        <div className="w-25 m-auto d-flex mt-2 justify-content-end">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setTags(initial.map((t) => { return { ...t } }))}
            disabled={submitting}
          >
            Undo
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm ms-2"
            onClick={handleSubmit}
            disabled={submitting}
          >
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

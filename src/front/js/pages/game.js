import React, { useContext } from "react";
export const Game = () => {
  return (
    <div className="container commentBox pt-3">
      <div className="mb-3">
        <div>
          <input type="number" min={1} max={10} ></input>
        </div>
        <textarea
          placeholder="Write a Comment"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <div className="d-flex justify-content-end pt-1">
          <button type="button" className="btn btn-outline-success">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

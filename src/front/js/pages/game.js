import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import getYear from "date-fns/getYear";
import { Context } from "../store/appContext";
import CommentCard from "../component/commentCard";

export const Game = () => {
  const { store, actions } = useContext(Context);
  const { user } = store;
  const params = useParams();
  const { gameId } = params;
  const [gameData, setGameData] = useState(null);
  const [myComment, setMyComment] = useState(null);
  const [score, setScore] = useState(null);
  const [content, setContent] = useState(null);
  const token = localStorage.getItem("jwt-token");

  const getGame = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}/api/game/${gameId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();
    let comments;
    if (user) {
      comments = data.comments.filter((c) => c.user.id !== user.id);
      const comment = data.comments.find((c) => c.user.id === user.id);
      setMyComment(comment);
      setContent(comment.content);
      setScore(comment.score);
    }
    else comments = data.comments
    setGameData({...data, comments});
  };

  const submit = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}/api/comment`, {
      method: "POST",
      body: JSON.stringify({
        content,
        score,
        user_id: user.id,
        game_id: gameId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    console.log(resp.ok);
    console.log(resp.status);
    // console.log(resp.text());
    const data = await resp.json();
    console.log(data);
  }

  useEffect(() => {
    getGame();
  },[]);
  return (
    <div className="d-flex pt-3 marginPage">
      <div className="cover ps-3">
        <h2 className="text-center">{gameData?.title}
          <h6>({gameData?.release_date && getYear(new Date(gameData.release_date))})</h6>
        </h2>
        <img
          className="imageCover"
          src={gameData?.picture}
        ></img>
      </div>
      <div className="information">
        <div className=" container d-flex ">
          <div className="pt-3 score casual">
            <p className="text-center mb-0 mx-4"> Puntaje Casual 👶</p>

            <p className="text-center mt-0"> 6/10</p>
          </div>
          <div className="pt-3 score habitual">
            <p className="text-center mb-0 mx-4"> Puntaje Habitual 💪</p>
            <p className="text-center mt-0"> 9/10</p>
          </div>
        </div>

        <div className="container pt-3">
          <p>
            {gameData?.description}
          </p>
        </div>
        <div className="ps-3">
          <div className="container commentBox pt-3 ">
            <div className="mb-3">
              <div className="pb-2">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Write Your Opinion About This Game"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="d-flex justify-content-end pt-1 pb-1">
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                  disabled={score === null}
                  onClick={submit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        {gameData && gameData.comments.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
};

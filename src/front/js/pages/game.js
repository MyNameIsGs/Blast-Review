import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import getYear from "date-fns/getYear";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../store/appContext";
import CommentCard from "../component/commentCard";
import stars from "../component/starsRating";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
/>;

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
  const stars = document.querySelectorAll(".stars i");

  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      stars.forEach((star, index2) => {
        index1 >= index2
          ? star.classList.add("active")
          : star.classList.remove("active");
      });
    });
  });
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
    } else comments = data.comments;
    setGameData({ ...data, comments });
  };

  const submit = async () => {
    const isUpdating = myComment ? true : false;
    const resp = await fetch(
      `${process.env.BACKEND_URL}/api/comment${
        isUpdating ? `/${myComment.id}` : ""
      }`,
      {
        method: isUpdating ? "PUT" : "POST",
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
      }
    );
    console.log(resp.ok);
    console.log(resp.status);
    // console.log(resp.text());
    const data = await resp.json();
    console.log(data);
    setMyComment(data.result);
    toast.success(
      `Comment ${isUpdating ? "updated" : "published"} succesfully!`,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  useEffect(() => {
    getGame();
  }, []);
  return (
    <div className="d-flex pt-3 marginPage">
      <div className="cover p-3 text-center backgroundGame">
        <h3 className="text-center text-white">
          {gameData?.title}
          <h6>
            (
            {gameData?.release_date && getYear(new Date(gameData.release_date))}
            )
          </h6>
        </h3>
        <img className="imageCover" src={gameData?.picture}></img>
      </div>
      <div className="information backgroundGame ms-3 p-3 pe-5">
        <div className="d-flex ">
          <div className="pt-2 score casual">
            <div className="pillCasual d-flex">
              <img
                src="https://i.ibb.co/ysH2hSt/Noob-Logo.png"
                className="casualLogo mt-2 ms-4 mb-0"
              ></img>

              <div>
                <h2 className="text-center ms-2 mt-2 mb-0 me-3 pixelTitle">65%</h2>
              </div>
            </div>
            <div className="mt-2">
              <p className="pixelText">Casual Score</p>
            </div>
          </div>
          <div className="pt-2 score habitual">
            <div className="pillHabitual d-flex">
              

              <div>
                <h2 className="text-center mt-2 mb-0 ms-2 pixelTitle">95%</h2>
              </div>
              <img
                src="https://i.ibb.co/2WNrs7H/Pro-Logo.png"
                className="habitualLogo ms-1 mt-0 me-4 mb-0"
              ></img>
            </div>
            
            <div className="mt-2">
              <p className="pixelText">Habitual Score</p>
            </div>
            
          </div>
        </div>

        <div className="container pt-3 text-white">
          <div class="tagLook action me-1">
            <span class="tagPills">Action</span>
          </div>
          <div class="tagLook adventure me-1">
            <span class="tagPills">Adventure</span>
          </div>
          <div class="tagLook openWorld me-1">
            <span class="tagPills">Open World</span>
          </div>
          <div class="tagLook singlePlayer me-1">
            <span class="tagPills">Single Player</span>
          </div>
          <div class="tagLook nintendo me-1">
            <span class="tagPills">Nintendo Switch</span>
          </div>

          <p>{gameData?.description}</p>
        </div>

        <div className="ps-3">
          <div className="container commentBox pt-3 ">
            <div className="mb-3">
              <div className="pb-2 stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
      <div class=" ms-3 p-3 backgroundGame">
        {gameData &&
          gameData.comments.map((comment) => <CommentCard comment={comment} />)}
      </div>
    </div>
  );
};

import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import CarouselComponent from "../component/carouselComponent";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [recommended, setRecommended] = useState([]);
  const [mainGame, setMainGame] = useState(null);

  const getRecommendedGames = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}/api/game`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();

    setRecommended(data.result);
  }

  const getMainGame = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}/api/maingame`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();

    setMainGame(data.result);
  }

  useEffect(() => {
    getRecommendedGames();
    getMainGame();
  }, []);

  return (
    <main>
      <div
        className="principalGame"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${mainGame?.banner})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="spaceMargin container">
          <h3 className="principalGameTitle">
            {mainGame?.title}
          </h3>

          <p className="description">
            {mainGame?.description}
          </p>
          <a href={`/game/${mainGame?.id}`}>
            <button class="principalGameButton">
              <i class="fas fa-info-circle"></i>Read about this game
            </button>
          </a>
        </div>
      </div>
      <div className="recommendedGames spaceMargin">
        <div className="container-Title-Controls">
          <h3>Recommended games</h3>
          <div className="gameIndicators"></div>
        </div>
        <CarouselComponent elements={recommended} />
        {/* <div className="principalContainer">
          <button id="leftArrow">
            <i class="fa-solid fa-angle-left"></i>
          </button>

          <div className="containerGameCarousel">
            <div className="gameCarousel">
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://cdn02.plentymarkets.com/qozbgypaugq8/item/images/1613/full/PSTR-ZELDA005.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/2">
                  <img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/4">
                  <img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/3">
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/2">
                  <img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/2">
                  <img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/2">
                  <img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img>
                </a>
              </div>
              <div className="videoGame">
                <a href="/game/1">
                  <img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img>
                </a>
              </div>
            </div>
          </div>
          <button id="rightArrow">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div> */}
        {/* <script src="../component/carousel.js" /> */}
      </div>
    </main>
  );
};

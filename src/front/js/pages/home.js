import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";



export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main>
      <div className="principalGame">
        <div className="spaceMargin container">
          <h3 className="principalGameTitle">
            The Legend of Zelda: Breath of the Wild
          </h3>

          <p className="description">
            After a 100-year slumber, Link wakes up alone in a world he no
            longer remembers. Now the legendary hero must explore a vast and
            dangerous land and regain his memories before Hyrule is lost
            forever. Armed only with what he can scavenge, Link sets out to find
            answers and the resources needed to survive.
          </p>
          <a href="/game/1"><button class="principalGameButton">
          
            <i class="fas fa-info-circle"></i>Read about this game
          </button>
          </a>
        </div>
      </div>
      <div className="recommendedGames spaceMargin">
        <div className="container-Title-Controls">
          <h3>Recommended games</h3>
          <div className="gameIndicators">
            
          </div>
        </div>
        <div className="principalContainer">
          <button id="leftArrow">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          
          <div className="containerGameCarousel">
              <div className="gameCarousel"> 
              <div className="videoGame">
                <a href="/game/1"><img src="https://cdn02.plentymarkets.com/qozbgypaugq8/item/images/1613/full/PSTR-ZELDA005.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/2"><img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/2"><img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/2"><img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/2"><img src="https://cdn.europosters.eu/image/750/posters/super-mario-odyssey-collage-i50045.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://thumbnails.pcgamingwiki.com/d/d0/Vampire_Survivors_cover.jpg/300px-Vampire_Survivors_cover.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://upload.wikimedia.org/wikipedia/en/f/fc/Hi-Fi_Rush_cover_art.jpg"></img></a>
              </div>
              <div className="videoGame">
                <a href="/game/1"><img src="https://m.media-amazon.com/images/M/MV5BNjU4Y2M4NGUtZTY4OC00MDEzLThhYWItOTEyMGUwMWVjMzE0XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg"></img></a>
              </div>
              
            </div>
            
          </div>
          <button id="rightArrow">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

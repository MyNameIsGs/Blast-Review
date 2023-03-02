import React, { useState, useRef } from "react";
import Carousel from 'react-elastic-carousel';

const CarouselComponent = ({ elements }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 7 }
  ];
  return (
    <div className="principalContainer">
      {/* <button id="leftArrow">
        <i class="fa-solid fa-angle-left"></i>
      </button> */}

      <div className="containerGameCarousel">
        <div className="gameCarousel">
          <Carousel breakPoints={breakPoints}>
            {elements.map((elem) => (
              <div className="videoGame">
                <a href={`/game/${elem.id}`}>
                  <img src={elem.picture}></img>
                </a>
              </div>
            ))}
            {/* <div className="videoGame">
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
            </div> */}
          </Carousel>
        </div>
      </div>
      {/* <button id="rightArrow">
        <i class="fa-solid fa-angle-right"></i>
      </button> */}
    </div>
  );
};

export default CarouselComponent;

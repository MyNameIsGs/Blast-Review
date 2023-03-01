import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Search = () => {
  const [search] = useSearchParams();
  const [games, setGames] = useState([]);
  const { store, actions } = useContext(Context);

  const searchGames = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}/api/game?like=${search.get('like')}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();

    setGames(data.result);
  }

  useEffect(() => {
    searchGames();
  }, [search]);

  return (
    <main>
      <div className="recommendedGames spaceMargin">
        <div className="container-Title-Controls">
          <h3>Results: {games.length}</h3>
          <div className="gameIndicators"></div>
        </div>
        <div className="container">
          {games.map((game) => (
            <div className="videoGame" style={{ width: '100px',}}>
              <a className="text-decoration-none" href={`/game/${game.id}`}>
                <img style={{ width: '100px', height: '150px' }} src={game.picture}></img>
                <p className="fw-bold text-center text-dark">{game.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

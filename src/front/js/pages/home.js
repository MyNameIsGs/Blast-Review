import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import rigoImageUrl from "../../img/rigo-baby.jpg";

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
          <button class="principalGameButton">
            <i class="fas fa-info-circle"></i>Read about this game
          </button>
        </div>
      </div>
    </main>
  );
};

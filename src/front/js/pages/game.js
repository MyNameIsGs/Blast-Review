import React, { useContext } from "react";
export const Game = () => {
  return (
    <div className="d-flex pt-3 marginPage">
      <div className="cover ps-3">
        <h2 className="text-center">The Legend of Zelda <h6>(2017)</h6></h2>
        <img
          className="imageCover"
          src="https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
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

        <div className="container">
          <p>
            The Legend of Zelda: Breath of the Wild es la nueva aventura de
            acción de Nintendo para Wii U y Nintendo Switch que nos presenta el
            título más ambicioso de la saga con un mundo abierto por explorar y
            en el que realizar todo tipo de acciones como escalar además de
            otras clásicas como nadar o montar a caballo.
          </p>
        </div>
        <div className="ps-3">
          <div className="container commentBox pt-3 ">
            <div className="mb-3">
              <div className="pb-2">
                <input type="number" min={1} max={10}></input>
              </div>
              <textarea
                placeholder="Write Your Opinion About This Game"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <div className="d-flex justify-content-end pt-1 pb-1">
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

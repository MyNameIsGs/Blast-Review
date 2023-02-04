import React, { useContext } from "react";
export const Game = () => {
  return (
    <div>
        <div className="container d-flex justify-content-end"> 
        <div className="p-3"> 9/10</div>
        
        
        <div className="p-3">8/10</div>
        </div>
      <div className="container" >
        <p>
          The Legend of Zelda: Breath of the Wild es la nueva aventura de acción
          de Nintendo para Wii U y Nintendo Switch que nos presenta el título
          más ambicioso de la saga con un mundo abierto por explorar y en el que
          realizar todo tipo de acciones como escalar además de otras clásicas
          como nadar o montar a caballo.
        </p>
      </div>
      <div className="container commentBox pt-3">
        <div className="mb-3">
          <div>
            <input type="number" min={1} max={10}></input>
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
    </div>
  );
};

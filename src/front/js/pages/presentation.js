import React, { useState } from "react";
import "../../styles/home.css";

export const Presentation = () => {
  const technologies = [{
    src: 'https://png.pngitem.com/pimgs/s/664-6644509_icon-react-js-logo-hd-png-download.png',
    alt: 'React-js',
  },{
    src: 'https://static.javatpoint.com/tutorial/flask/images/flask-tutorial.png',
    alt: 'Flask',
  },{
    src: 'https://kennethmanhonglee.com/images/icons/sqlalchemy.png',
    alt: 'sqlalchemy',
  },{
    src: 'https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc',
    alt: 'Python',
  },{
    src: 'https://www.comparasoftware.com/wp-content/uploads/2018/08/logoPostgreSQL.png',
    alt: 'Postgresql',
  }]
  return (
    <div className="text-center">
      <h2 className="my-2">Conócenos</h2>
      <div className="m-auto w-75">
        <p>
          Blast Review es una plataforma de reseñas de video juegos que permite
          a los usuarios seleccionar sus categorías favoritas, opinar y leer
          opiniones sobre videojuegos, así como separar las críticas de los
          jugadores no experimentas de los más experimentados en cada categoría.
        </p>
      </div>
      <div className="m-auto w-75 d-flex">
        <div className="mt-5 p-3 w-25 m-auto backgroundGame text-white ">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHLNufJMMNYiA/profile-displayphoto-shrink_800_800/0/1667177078641?e=1683158400&v=beta&t=VVawkg9jD9FZfFj949mmEYkuMQVbuVZutLjF26zsD6o"
            alt="gus"
            width="200px"
            height="200px"
          />
          <h4 className="my-2">Ing. Gustavo Márquez</h4>
          <p>
            Soy Ingeniero de Sistemas, desarrollador full-stack y apasionado por
            la música y la tecnología.
          </p>
        </div>
        <div className="mt-5 p-3 w-25 m-auto backgroundGame text-white ">
          <img src="" alt="" width="200px" height="200px" />
          <h4 className="my-2"></h4>
          <p></p>
        </div>
      </div>
      <div>
        <h2 className="my-4">Tecnologías</h2>
        <div className="technologies p-3 m-auto backgroundGame d-flex">
          {technologies.map((tech) => (
            <div className="technology">
              <img
                src={tech.src}
                alt={tech.alt}
                width="200px"
                height="200px"
                style={{ borderRadius: "20px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import RenderAPI from "../axios/config";

import "./Planos.css";
import "./Planos2.css"

import Loading from "../components/Loading";
import NewsLetter from "../components/NewsLetter";

const Planos = () => {
   const [isActive, setIsActive] = useState(true);
      const handleClick = (event) => {
       setIsActive(current => !current);
      };

  const [Planos, setPlanos] = useState([]);

     
  const getPlanos = async () => {
    try {
      const response = await RenderAPI.get("/Planos");
      const data = response.data;
      setPlanos(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getPlanos();
  }, []);

  return (
    <div className="planos">
      <h1>CATEGORIAS VEICULAR.</h1>
      <h3>"ESCOLHA A CATEGORIA IDEAL PARA VOCE!"</h3>
      
      <div className='wrapper-planos'>
        {Planos.length === 0 ? (
          <Loading />
        ) : (
          Planos.map((item) => (
            <div
              onAnimationEnd={handleClick}
              className={`plano-card
              ${isActive ? 'animate__animated animate__slideInLeft' : ''}
              `}
              key={item.id}
            >
              <div className={`descr${item.id}`}>
                <h2 className={`descr-title${item.id}`}>{item.descr} </h2>
              </div>
              <div className="service">
                {((serv, i) => (
                  <div className={`service${item.id}-${i}`} key={i}>
                    {serv}
                  </div>
                ))}
              </div>
              <div className="valor">
                <small className="fake">{`De R$${(
                  item.valor * 2 +
                  0.99
                ).toFixed(2)} Por:`}</small>
                <p className="valorVenda">
                  {item.valor}
                  <span className="valortotal"></span>
                </p>

                <small className="parcela">
                  *Parcelamos ate x S/JUROS
                </small>
              </div>
              
              <div>
                <div className="container-ct-logo-redes-sociais">
                  <Link to={`/Planos/${item.id}`} className="btn-planos">
                    ADQUIRIR
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <NewsLetter />
    </div>
  );
};

export default Planos;
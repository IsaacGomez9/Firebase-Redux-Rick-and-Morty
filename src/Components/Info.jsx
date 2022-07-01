import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardPj from "./CardPj";

const Info = () => {
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getPerso = async () => {
      const resp = await fetch(url);
      const dataP = await resp.json();
      console.log(dataP);
      setData(dataP);
    };
    getPerso();
  }, []);

  return (
    <div className="div">
      <div className="container d-flex justify-content-center mt-5">
        <CardPj data={data} />
      </div>
    </div>
  );
};

export default Info;

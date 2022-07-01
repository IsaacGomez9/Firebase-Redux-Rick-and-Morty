import React from "react";
import { Card, Button } from "react-bootstrap";
import style from '../styles/Cardpersonaje.module.css'

const CardPj = ({ data }) => {
  return (
    <div className="">
      <div className="">
        <Card style={{ width: "18rem" }} className={style.card} >
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title className="text-center">{data.name}</Card.Title>
            <hr />
            <Card.Text>
              <h5>Data :</h5>
            </Card.Text>
            <div>
              {
                <ul>
                  <li>Genero: {data.gender}</li>
                  <li>Especie: {data.species}</li>
                  <li>Status: {data.status}</li>
                </ul>
              }
            </div>
            <div className="text-center">
              <Button className="text-center" variant="primary" href="/home">
                Volver
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardPj;

import React from "react";
import { Card, Button } from "react-bootstrap";
import style from "../styles/Cardpersonaje.module.css";

const CardPj = ({ data }) => {
  return (
    <div className="">
      <div className="mt-3">
        <Card style={{ width: "18rem" }} className={style.card}>
          <Card.Img
            variant="top"
            src={data.image}
            className="p-2"
            style={{ borderRadius: "1rem" }}
          />
          <Card.Body>
            <Card.Title className="text-center" style={{ fontSize: "1.5rem" }}>
              {data.name}
            </Card.Title>
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
              <Button className="text-center bg-dark" variant="primary" href="/home">
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

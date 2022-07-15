import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../styles/Cardpersonaje.module.css";

const Cardpersonaje = ({ personaje }) => {
  const { name, image, status, species, id } = personaje;
  return (
    <div className=" my-3">
      <Card style={{ width: "19rem" }} className={style.card}>
        <Card.Img variant="top" src={image} alt={name} className="p-2" style={{borderRadius: '1rem'}} />

        <Card.Body className="text-center">
          <Card.Title style={{ fontSize: "1.5rem" }}>{name}</Card.Title>

          <span
            className={`btn btn-sm float-center ${
              status.toLowerCase().includes("alive")
                ? "btn-success"
                : "btn-danger"
            }`}
          >
            {status}
          </span>
          <div className="row text-center mt-3">
            <p style={{ fontSize: "1.5rem" }}>
              {" "}
              Especie: <span>{species}</span>
            </p>
          </div>
          <div className="text-center ">
            <Link to={`/info/${id}`}>
              <Button variant="info" className="w-100 bg-dark text-white">
                Info
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardpersonaje;

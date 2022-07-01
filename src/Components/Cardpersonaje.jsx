import React from "react";
import { Button, Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import style from '../styles/Cardpersonaje.module.css'

const Cardpersonaje = ({ personaje }) => {
  const { name, image, status, species, id } = personaje;
  return (
    <div className="card my-3">
      <Card style={{ width: "19rem" }} className={style.card}>
        <Card.Img variant="top" src={image} alt={name} />
        
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
        
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
            <p> Especie: <span>{species}</span></p>
          </div>
        </Card.Body>
        <div className="text-center">
          <Link to={`/info/${id}`}><Button variant="info">Info</Button></Link>
        </div>
        
      </Card>
    </div>
  );
};

export default Cardpersonaje;

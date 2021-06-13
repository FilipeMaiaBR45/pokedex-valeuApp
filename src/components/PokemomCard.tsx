import React from "react";

import { Card } from "../styles/styles";
import { Col } from "react-bootstrap";

interface PokemomProps {
  // ? para propriedades não obrigatoria
  img: string;
  name: string;
  type: string[];
  height: string;
  weight: string;
}

const PokemomCard: React.FC<PokemomProps> = ({
  img,
  name,
  type,
  height,
  weight,
}) => {
  return (
    <>
      <Col xl="3" sm="6" className="d-flex justify-content-center mt-5">
        <Card className={type[0].toLowerCase()}>
          <div className="text-center">
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <h2>
              Type:{" "}
              {type.map((t, i) => {
                if (i === type.length - 1) {
                  return t;
                }

                return t + ", ";
              })}{" "}
            </h2>
            <h2>Height: {height} </h2>
            <h2>Weight: {weight} </h2>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default PokemomCard;

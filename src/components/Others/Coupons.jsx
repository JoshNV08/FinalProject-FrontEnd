import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import "../../Styles/Coupons.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Confetti from "react-confetti";

const data = [
  {
    option: "10% OFF",
    style: { backgroundColor: "#ffcc00", textColor: "#fe3031" },
  },
  {
    option: "Envio Gratis",
    style: { backgroundColor: "#fe3031", textColor: "#ffcc00" },
  },
  {
    option: "Nada",
    style: { backgroundColor: "#ffcc00", textColor: "#fe3031" },
  },
  {
    option: "Refresco Gratis",
    style: { backgroundColor: "#fe3031", textColor: "#ffcc00" },
  },
  {
    option: "Papas de Regalo",
    style: { backgroundColor: "#ffcc00", textColor: "#fe3031" },
  },
  {
    option: "2x1",
    style: { backgroundColor: "#fe3031", textColor: "#ffcc00" },
  },
];

const Cupones = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    if (prizeNumber !== null && prizeNumber !== 2) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  }, [prizeNumber]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center">
      {showConfetti && <Confetti />}
      <Row className="justify-content-center">
        <Col md={12} className="text-center">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
          <Button
            onClick={handleSpinClick}
            className="btnYellow rounded-5 mt-3">
            <span>Girar</span>
          </Button>
          {prizeNumber !== null && (
            <div className="mt-3">
              <h2>¡Felicidades!</h2>
              <h3>Ganaste: {data[prizeNumber].option}</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cupones;

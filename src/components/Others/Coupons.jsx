import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import "../../Styles/Others/Coupons.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Confetti from "react-confetti";

const data = [
  {
    option: "10% OFF",
    style: { backgroundColor: "#ffcc00", textColor: "#fe3031" },
  },
  {
    option: "Free Shipping",
    style: { backgroundColor: "#fe3031", textColor: "#ffcc00" },
  },
  {
    option: "Nothing",
    style: { backgroundColor: "#ffcc00", textColor: "#fe3031" },
  },
  {
    option: "Free Drink",
    style: { backgroundColor: "#fe3031", textColor: "#ffcc00" },
  },
  {
    option: "Free Fries",
    style: { backgroundColor: "#ffcc00", textColor: "#fe3031" },
  },
  {
    option: "2x1",
    style: { backgroundColor: "#fe3031", textColor: "#ffcc00" },
  },
];

const Coupons = () => {
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
            <span>Spin</span>
          </Button>
          {prizeNumber !== null && (
            <div className="mt-3">
              <h2>Congratulations!</h2>
              <h3>You won: {data[prizeNumber].option}</h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Coupons;

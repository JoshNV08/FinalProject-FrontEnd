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
  const [showPrize, setShowPrize] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setShowPrize(false);
    setShowConfetti(false); // Hide confetti when starting a new spin
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    setShowPrize(true);
  };

  useEffect(() => {
    if (showPrize && prizeNumber !== 2) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  }, [showPrize, prizeNumber]);

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      {showConfetti && <Confetti />}
      <Row className="justify-content-center">
        <Col md={12} className="text-center">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleStopSpinning}
          />
          <Button onClick={handleSpinClick} className="btnYellow rounded-5 mt-3">
            <span>Spin</span>
          </Button>
          {showPrize && (
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

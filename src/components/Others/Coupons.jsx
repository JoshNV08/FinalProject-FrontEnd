import React, { useState } from "react";
import Confetti from "react-canvas-confetti";
import "../../Styles/Coupons.css";

const coupons = [
  "10% Off",
  "20% Off",
  "30% Off",
  "50% Off",
  "Free Item",
  "Buy 1 Get 1 Free",
  "No Win",
];

const Cupones = () => {
  const [spinning, setSpinning] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const spinWheel = () => {
    setSpinning(true);
    setShowConfetti(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * coupons.length);
      setSelectedCoupon(coupons[randomIndex]);
      setSpinning(false);
      setShowConfetti(true);
    }, 4000); // Duración de la animación
  };

  return (
    <div className="cupones-container">
      {showConfetti && <Confetti />}
      <div className="wheel-container">
        <div className={`wheel ${spinning ? "spinning" : ""}`}>
          <div className="wheel-inner">
            {coupons.map((coupon, index) => (
              <div key={index} className={`wheel-segment segment-${index + 1}`}>
                <span>{coupon}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer"></div>
        <button onClick={spinWheel} disabled={spinning}>
          {spinning ? "Spinning..." : "Spin the Wheel"}
        </button>
        {selectedCoupon && !spinning && (
          <div className="result">
            You won: <strong>{selectedCoupon}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cupones;

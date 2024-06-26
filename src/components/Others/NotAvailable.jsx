import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../Styles/Others/Modal.css";

function NotAvailable({ handleClose }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="title-modal">
            Function Not Available
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="../../src/assets/BurgerModal.png"
              alt="Product not available"
              style={{ width: "50%" }}
            />
            <div className="text-center">
              <p>Sorry, but this function is currently not available.</p>
              <p>We will be implementing it soon.</p>
              <p>
                Don't forget to register to stay informed about all the updates.
              </p>
              <p>Thank you very much!</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-modal" onClick={handleClose}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NotAvailable;

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../Styles/Others/Modal.css";

function NotAvailable({ handleClose }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="title-modal">Función no disponible</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <img
              src="../../src/assets/BurgerModal.png"
              alt="Producto no disponible"
              style={{ width: "50%" }}
            />
            <div className="text-center">
              <p>
                Lo sentimos, pero esta función no está disponible actualmente.
              </p>
              <p>Estaremos implementándola próximamente.</p>
              <p>
                No olvides registrarte para estar enterado de todas las
                novedades.
              </p>
              <p>¡Muchas Gracias!</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-modal' onClick={handleClose}>
            Volver atrás
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NotAvailable;

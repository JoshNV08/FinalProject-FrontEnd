import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../Styles/Work.css";
import "../../Styles/ButtonYellow.css";

function Work() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, x: '100vw', transition: { ease: 'easeInOut' } },
  };

  return (
    <Container className="container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center d-none d-lg-block z-1">
          <motion.img
            src="src/assets/WorkImage.png"
            alt="Work with us"
            className="img-fluid imgWork"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          />
        </Col>

        <Col md={6}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Form id="form" onSubmit={handleSubmit} className="text-center ">
              <h2>Trabaja con Nosotros</h2>

              <Form.Group controlId="formNombre" className="mb-4">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre y Apellido completo" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Escribe tu Email" />
              </Form.Group>

              <Form.Group controlId="formMensaje" className="mb-4">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="¿Hay algo que creas importante contarnos?" />
              </Form.Group>

              <Form.Group controlId="formTelefono" className="mb-4">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Teléfono" />
              </Form.Group>

              <Form.Group controlId="formFile" className="file-upload mb-4">
                <Form.Label className="mt-3 label">Subir archivo *</Form.Label>
                <Form.Control
                  type="file"
                  size="sm"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls"
                />
                <p className="file-formats">pdf, jpg, jpeg, png, doc, docx, xls</p>
              </Form.Group>

              <Button type="submit" className="btnYellow rounded-5 mb-5">
                <span>Enviar</span>
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Work;

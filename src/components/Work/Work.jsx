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

        <Col md={6} className="work">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Form id="form" onSubmit={handleSubmit} className="text-center textWork">
              <h2>Trabaja con Nosotros</h2>

              <div className="input-group mb-4">
                <input
                  required
                  type="text"
                  name="nombre"
                  autoComplete="off"
                  className="input rounded-4"
                />
                <label className="user-label-work">Nombre</label>
              </div>

              <div className="input-group mb-4">
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="off"
                  className="input rounded-4"
                />
                <label className="user-label-work">Email</label>
              </div>

              <div className="input-group mb-4">
                <textarea
                  required
                  name="mensaje"
                  rows={3}
                  className="input rounded-4"
                ></textarea>
                <label className="user-label-work">Mensaje</label>
              </div>

              <div className="input-group mb-4">
                <input
                  required
                  type="tel"
                  name="telefono"
                  autoComplete="off"
                  className="input rounded-4"
                />
                <label className="user-label-work">Teléfono</label>
              </div>

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
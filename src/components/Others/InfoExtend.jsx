import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../Styles/InfoExtend.css";

function InfoExtend() {
  return (
    <Container fluid className="ps-0" style={{ backgroundColor: "#ffffff" }}>
      <Row className="align-items-center py-3">
        <div className="text-md-center text-center">
          <h1 style={{ fontWeight: "bold" }}>¿Quienes Somos?</h1>
        </div>
        <div className="d-flex justify-content-center">
          <Col md={5} className=" text-md-start text-center">
            <h2
              style={{ fontWeight: "bold" }}
              className="display-5 text-danger my-5 text-center"
            >
              MISIÓN
            </h2>
            <p>
              Ser la cadena de restaurantes de hamburguesas preferida de la
              gente, la más rentable, proyectada a futuro y con las personas más
              talentosas, alineados a la visión y los valores de Good Burguer.
            </p>
          </Col>
          <Col md={5} className=" text-md-start text-center mx-sm-5">
            <h2
              style={{ fontWeight: "bold" }}
              className="display-5 text-danger my-5 text-center"
            >
              VISIÓN
            </h2>
            <p>
              Somos Good Burguer S.A., nos encontramos operando en Montevideo y
              Punta del Este. En Good Burguer servimos con orgullo las mejores
              hamburguesas, así como una variedad de auténticos productos
              preparados al momento y cuando nuestros clientes lo necesitan,
              siendo la mejor experiencia de comida rápida en el país. Contamos
              con una oferta de productos de excelente calidad, esmerada
              atención y un ambiente sorprendente, alineado con la filosofía de
              la empresa.
            </p>
          </Col>
        </div>
      </Row>
      <Row className="d-flex align-items-center justify-contents-center text-center p-4">
        <Col xs={6} md={6} lg={3}>
          <Card className="rounded-5 mb-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Joshua Nuñez</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Card className="rounded-5 mb-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Ezequiel Clavijo</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Card className="rounded-5 mb-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Sebastián De León</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <Card className="rounded-5 mb-4" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Nicolás Dos Santos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoExtend;

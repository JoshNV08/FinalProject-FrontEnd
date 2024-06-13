import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Linkedin, Github, Instagram, Twitter } from "react-bootstrap-icons";
import "../../Styles/Others/InfoExtend.css";

function InfoExtend() {
  return (
    <Container>
      <Row className="d-flex justify-content-center py-3">
        <div className="text-md-center text-center">
          <h1 style={{ fontWeight: "bold" }}>¿Quiénes Somos?</h1>
        </div>
        <Col md={6} xs={12} className="text-center">
          <h2
            style={{ fontWeight: "bold", color: "#fe3031" }}
            className="display-5 mb-4 mt-5 text-center"
          >
            MISIÓN
          </h2>
          <p>
            Nuestra misión en Good Burger es ser reconocidos como la cadena de
            restaurantes de hamburguesas preferida por la gente, destacando por
            nuestra rentabilidad y proyección hacia el futuro. Nos esforzamos
            por reunir a las personas más talentosas y comprometidas, quienes
            están totalmente alineadas con nuestra visión y valores, para
            ofrecer experiencias excepcionales y sabrosas hamburguesas que
            deleiten a nuestros clientes en cada visita.
          </p>
        </Col>
        <Col md={6} xs={12} className="text-center ">
          <h2
            style={{ fontWeight: "bold", color: "#fe3031" }}
            className="display-5  mb-4 mt-3 mt-lg-5 text-center"
          >
            VISIÓN
          </h2>
          <p>
            Somos Good Burger S.A., nos encontramos operando en Montevideo y
            Punta del Este. En Good Burger servimos con orgullo las mejores
            hamburguesas, así como una variedad de auténticos productos
            preparados al momento y cuando nuestros clientes lo necesitan,
            siendo la mejor experiencia de comida rápida en el país. Contamos
            con una oferta de productos de excelente calidad, esmerada atención
            y un ambiente sorprendente, alineado con la filosofía de la empresa.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center text-center">
        <Col
          xs={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center text-center"
        >
          <Card className="rounded-4 mb-4 overflow-hidden">
            <Card.Img variant="top" src="src/assets/Joshua.png" className="" />
            <Card.Body>
              <Card.Title>Joshua Nuñez</Card.Title>
              <span>Cofundador</span>
              <Card.Text>
                <p className="textCard">
                  Programador, Diseñador, Filántropo.
                  <br />A su corta edad a revolucionado el mercado con sus
                  ideas. <br /> Un talento increíble con un futuro brillante.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Github size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Instagram size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Twitter size={20} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center text-center"
        >
          <Card className="rounded-4 mb-4 overflow-hidden">
            <Card.Img variant="top" src="src/assets/eze.png" />
            <Card.Body>
              <Card.Title>Ezequiel Clavijo</Card.Title>
              <span>Cofundador</span>
              <Card.Text>
                <p className="textCard">
                  Ex músico y deportista, actual programador.
                  <br /> En busca de algo que le apasione y asegure su futuro ha
                  encontrado su vocación.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Github size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Instagram size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Twitter size={20} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center text-center"
        >
          <Card className="rounded-4 mb-4 overflow-hidden ">
            <Card.Img variant="top" src="src/assets/seba.jpeg" />
            <Card.Body>
              <Card.Title>Sebastián De León</Card.Title>
              <Card.Text>
                <span>Cofundador</span>
                <p className="textCard">
                  Apasionado por el desarrollo y los deportes, ha demostrado un
                  talento único en el mercado.
                  <br /> Con una habilidad destacada en Valorant, su futuro es
                  prometedor.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Github size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Instagram size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Twitter size={20} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center text-center"
        >
          <Card className="rounded-4 mb-4 overflow-hidden">
            <Card.Img variant="top" src="src/assets/nico.png" />
            <Card.Body>
              <Card.Title>Nicolás Dos Santos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Github size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Instagram size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Twitter size={20} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoExtend;

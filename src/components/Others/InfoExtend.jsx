import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Linkedin, Github, Instagram, Twitter } from "react-bootstrap-icons";
import "../../Styles/Others/InfoExtend.css";

function InfoExtend() {
  return (
    <Container>
      <Row className="custom-intro d-flex justify-content-center py-3">
        <div className="text-md-center text-center">
          <h2 className="custom-title" style={{ fontWeight: "bold", color:"#fe3030" }}>

            About this project
          </h2>
        </div>
        <Col md={8} xs={12} className="text-center" style={{fontSize:"19px"}}>
          <p className="mt-3">
          The present e-commerce site is a project developed by students of Ánima FINEST - Hack Academy. FINEST is a hands-on educational program lasting two semesters, where students invest more than 600 hours learning about HTML, CSS, JavaScript, Node.js, Express, React.js, SQL, and Git.
            <FontAwesomeIcon icon="fa-brands fa-js" />        
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center py-3">
        <div className="text-md-center text-center">
          <h2 className="custom-titles pt-2" style={{ fontWeight: "bold", color:"#fe3030" }}>
            Team
          </h2>
        </div>
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
              <span>Co-founder</span>
              <Card.Text>
                <p className="textCard">
                  Programmer, Designer, Philanthropist.
                  <br /> At a young age, he has revolutionized the market with
                  his ideas. <br /> An incredible talent with a bright future.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/joshua-nuñez">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="https://github.com/JoshNV0">
                <Github size={20} />
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
              <span>Co-founder</span>
              <Card.Text>
                <p className="textCard">
                  Former musician and athlete, now a programmer.
                  <br /> In search of something that he is passionate about and
                  ensures his future, he has found his vocation.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/ezequiel-clavijo-051030-/">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="https://github.com/EzeClavijo">
                <Github size={20} />
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
                <span>Co-founder</span>
                <p className="textCard">
                  Passionate about development and sports, he has shown unique
                  talent in the market.
                  <br /> With outstanding skill in Valorant, his future is
                  promising.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/sebastiandeleon1/">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="https://github.com/blakh1">
                <Github size={20} />
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
                <span>Co-founder</span>
                <p className="textCard">
                  Enthusiast of technology and innovation, he has shown
                  exceptional creativity in the digital field.
                  <br /> The "father of the chicks"...
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://www.linkedin.com/in/nicol%C3%A1s-dos-santos-/">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="https://github.com/Nico2santos">
                <Github size={20} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoExtend;

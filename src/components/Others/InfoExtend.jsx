import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Linkedin, Github, Instagram, Twitter } from "react-bootstrap-icons";
import "../../Styles/Others/InfoExtend.css";

function InfoExtend() {
  return (
    <Container>
      <Row className="d-flex justify-content-center py-3">
        <div className="text-md-center text-center">
          <h1 style={{ fontWeight: "bold" }}>Who Are We?</h1>
        </div>
        <Col md={6} xs={12} className="text-center">
          <h2
            style={{ fontWeight: "bold", color: "#fe3031" }}
            className="display-5 mb-4 mt-5 text-center">
            MISSION
          </h2>
          <p>
            Our mission at Good Burger is to be recognized as the preferred
            burger restaurant chain by people, standing out for our
            profitability and projection towards the future. We strive to bring
            together the most talented and committed individuals, who are fully
            aligned with our vision and values, to offer exceptional experiences
            and delicious burgers that delight our customers on every visit.
          </p>
        </Col>
        <Col md={6} xs={12} className="text-center ">
          <h2
            style={{ fontWeight: "bold", color: "#fe3031" }}
            className="display-5 mb-4 mt-3 mt-lg-5 text-center">
            VISION
          </h2>
          <p>
            We are Good Burger S.A., operating in Montevideo and Punta del Este.
            At Good Burger, we proudly serve the best burgers, as well as a
            variety of authentic products prepared on the spot and when our
            customers need them, providing the best fast food experience in the
            country. We offer high-quality products, excellent service, and an
            amazing atmosphere, aligned with the company's philosophy.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center text-center">
        <Col
          xs={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center text-center">
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
              <Card.Link href="https://www.linkedin.com/in/joshua-nu%C3%B1ez-3843b8196?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC36NxQBkcJDTCgFaDYle9Re43CZT6cBI5w&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bznsgn1TaQjiz%2FvfB9jdKIQ%3D%3D">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Github size={20} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center text-center">
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
              <Card.Link href="https://github.com/EzeClavijo">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="#">
                <Github size={20} />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center text-center">
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
          className="d-flex justify-content-center text-center">
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
              <Card.Link href="https://github.com/Nico2santos">
                <Linkedin size={20} />
              </Card.Link>
              <Card.Link href="#">
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

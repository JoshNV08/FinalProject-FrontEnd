import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../Styles/Others/Contact.css";
import "../../Styles/Buttons/ButtonRed.css";

function Contact() {
  return (
    <Container className="contact-container">
      <Row>
        <Col md={6}>
          <Form id="form" className="contact-form rounded-5">
            <h2>Contact us</h2>
            <div className="input-group">
              <input
                required
                type="text"
                name="text"
                autoComplete="off"
                className="input rounded-5"
              />
              <label className="user-label">Name</label>
            </div>
            <div className="input-group">
              <input
                required
                type="email"
                name="email"
                autoComplete="off"
                className="input rounded-5"
              />
              <label className="user-label">Email address</label>
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                name="subject"
                autoComplete="off"
                className="input rounded-5"
              />
              <label className="user-label">Subject</label>
            </div>
            <div className="input-group">
              <textarea
                required
                name="message"
                rows={3}
                className="input rounded-5"></textarea>
              <label className="user-label">Message</label>
            </div>
            <Button type="submit" block className="mt-1 btnRed rounded-5">
              <span>Send</span>
            </Button>
          </Form>
        </Col>
        <Col md={6} className="info-contact">
          <div className="info-box rounded-5">
            <h2>Contact Information</h2>
            <p>
              <strong>Phone:</strong> +598 99 856 458
            </p>
            <p>
              <strong>Email:</strong> contact@goodburger.uy
            </p>
            <h4>Business Hours:</h4>
            <p>
              <strong>Monday to Friday:</strong> 7am - 10pm
            </p>
            <p>
              <strong>Saturday:</strong> 24 hours
            </p>
            <p>
              <strong>Sunday:</strong> 24 hours
            </p>
          </div>
          <Col md={12} className="social-contact">
            <div className="social-box rounded-5">
              <h3>Also contact us through our social networks</h3>
              <div className="parent">
                <button className="child childFacebook">
                  <a href="https://facebook.com/goodburger">
                    {" "}
                    <FaFacebook />
                  </a>
                </button>
                <button className="child childTwitter">
                  <a href="https://x.com/goodburger">
                    {" "}
                    <FaTwitter />
                  </a>
                </button>
                <button className="child childInstagram">
                  <a href="https://instagram.com/goodburger">
                    {" "}
                    <FaInstagram />
                  </a>
                </button>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

import React from "react";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import "../../Styles/Contact.css";

function Contact() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form id="form">
            <h2>Contact us</h2>

            <MDBInput label="Name" wrapperClass="mb-4" />

            <MDBInput
              type="email"
              label="Email address"
              wrapperClass="mb-4"
            />

            <MDBInput label="Subject" wrapperClass="mb-4" />

            <MDBTextArea wrapperClass="mb-4" label="Message" />

            <MDBBtn block className="my-4 button">
              Send
            </MDBBtn>
          </form>
        </div>

        <div className="col-6 InfoContact">
          <h2>Información de Contacto</h2>
          <p><strong>Teléfono:</strong> +598 99 856 458</p>
          <p><strong>Email:</strong> contact@goodburger.uy</p>
          <h4>Horario de Atención:</h4>
          <p><strong>Lunes a Viernes:</strong> 7am - 10pm</p>
          <p><strong>Sábado:</strong> 24 horas</p>
          <p><strong>Domingo:</strong> 24 horas</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import "../../Styles/Contact.css";

function Contact() {
  return (
    <form
      id="form"
      className="text-center"
      style={{ width: "100%", maxWidth: "300px" }}>
      <h2>Contact us</h2>

      <MDBInput label="Name" v-model="name" wrapperClass="mb-4" />

      <MDBInput
        type="email"
        label="Email address"
        v-model="email"
        wrapperClass="mb-4"
      />

      <MDBInput label="Subject" v-model="subject" wrapperClass="mb-4" />

      <MDBTextArea wrapperClass="mb-4" label="Message" />

  
      <MDBBtn color="primary" block className="my-4">
        Send
      </MDBBtn>
    </form>
  );
}
export default Contact;

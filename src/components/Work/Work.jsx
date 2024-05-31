import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import "../../Styles/Work.css";

function Work() {
  return (
    <div className="work">
      <form id="form" className="text-center" style={{ width: "700px" }}>
        <h2>Trabaja con Nosotros</h2>

        <MDBInput label="Nombre" v-model="name" wrapperClass="mb-4" />

        <MDBInput
          type="email"
          label="Email"
          v-model="email"
          wrapperClass="mb-4"
        />

        <MDBTextArea wrapperClass="mb-4" label="Mensaje" />

        <MDBInput label="Teléfono" v-model="number" wrapperClass="mb-4" />

        <div className="file-upload mb-4">
          <input type="file" id="file" className="inputfile" />
          <label htmlFor="file">Subir archivo *</label>
          <p className="file-formats">pdf, jpg, jpeg, png, doc, docx, xls</p>
        </div>

        <MDBBtn type="submit">Enviar</MDBBtn>
      </form>
    </div>
  );
}

export default Work;

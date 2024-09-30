import React, { useState } from "react";
import {
  CButton,
  CCol,
  CContainer,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import FormLogins from "./FormLogins";
import Mydocument from "./MyDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Pa() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CContainer>
        <CRow className="mt-5">
          <h1>INTERNACIONALIZACIÓN</h1>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol className="mt-2 mb-2">
            <h3>Usuario Actual</h3>
          </CCol>
          <CCol>
            <input disabled value={"Formativa.ti@pucese.edu.ec"}></input>
          </CCol>
          <CCol>
            <CButton color="primary" onClick={() => setVisible(!visible)}>
              +
            </CButton>
            <PDFDownloadLink document={<Mydocument />} fileName="Mi-pdf.pdf">
              {({ Loading }) =>
                Loading ? (
                  <button>Cargando...</button>
                ) : (
                  <button>Descargar</button>
                )
              }
            </PDFDownloadLink>
          </CCol>
        </CRow>
      </CContainer>
      <CModal
        scrollable
        size="xl"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ScrollingLongContentExampleLabel2"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel2">
            Documento
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FormLogins />
        </CModalBody>
      </CModal>
    </>
  );
}

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import hd from "../assets/header.png";
import ft from "../assets/feat.png";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "70px",
    position: "relative",
  },
  header: {
    position: "absolute",
    top: -50,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: "3px",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    paddingVertical: "3px",
    paddingHorizontal: "3px",
    border: "1px solid black",
    width: "50%",
  },
  subtitle: {
    fontSize: "8px",
    fontWeight: "bold",
  },
  headtext: {
    fontSize: "12px",
    backgroundColor: "#D9D9D9",
    textAlign: "center",
    paddingVertical: "3px",
    fontWeight: "bold",
    marginVertical: "10px",
  },
  title: {
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "bold",
  },
  content: {
    fontSize: "8px",
  },
  subt_content: {
    backgroundColor: "#F2CEEF",
  },
  subt_content_green: {
    backgroundColor: "#B5E6A2",
  },
  subt_content_blue: {
    backgroundColor: "#44B3E1",
    fontSize: "7px",
  },
  subt_content_cyan: {
    backgroundColor: "#94DCF8",
    fontSize: "5px",
  },
  subt_content_darkblue: {
    backgroundColor: "#70A8E0",
    textAlign: "center",
  },
  details: {
    fontSize: "11px",
    fontWeight: "bold",
  },
  tableEnd: {
    display: "table",
    width: "auto",
    marginVertical: "15px",
  },
  tableRowEnd: {
    flexDirection: "row",
    marginHorizontal: "50px",
  },
  tableCellEnd: {
    paddingTop: "50px",
    paddingHorizontal: "3px",
    border: "1px solid black",
    width: "50%",
    textAlign: "center",
  },
  subtitleEnd: {
    fontSize: "8px",
    fontWeight: "bold",
    paddingVertical: "30px",
  },
  contentEnd: {
    fontSize: "8px",
    paddingHorizontal: "30px",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  textEnd: {
    fontSize: "11px",
    fontWeight: "bold",
    fontFamily: "Times-Roman",
    paddingTop: "20px",
  },
  contentTextEnd: {
    fontSize: "10px",
    fontFamily: "Times-Roman",
  },
});

const currentDate = new Date().toLocaleDateString();

const MyDocument = ({ dataList, participants }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.header}>
          <Image src={hd} style={{ width: "100%" }}></Image>
        </View>

        <Text style={styles.title}>INFORME DE MOVILIDAD INTERNACIONAL</Text>
        <Text style={styles.headtext}>DATOS GENERALES</Text>

        <View style={styles.container}>
          <Text style={styles.details}>FECHA: {currentDate}</Text>
          <Text style={styles.details}>PERIODO ACADEMICO:</Text>
        </View>

        <br />

        <View style={styles.table}>
          {dataList.map((data, index) => (
            <React.Fragment key={index}>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content,
                  ]}
                >
                  SEDE
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.sede}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content,
                  ]}
                >
                  CÓDIGO CARRERA
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.c_carrera}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content,
                  ]}
                >
                  CÓDIGO CONVENIO INTERNACIONAL:
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.c_convenio}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content,
                  ]}
                >
                  NOMBRE DEL CONVENIO / CONVOCATORIA / EVENTO INTERNACIONAL
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.n_convenio}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content,
                  ]}
                >
                  CONTRAPARTE INTERNACIONAL
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.c_internacional}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content,
                  ]}
                >
                  PAÍS
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.pais}
                </Text>
              </View>
            </React.Fragment>
          ))}
        </View>
        <br />

        <Text style={styles.headtext}>DATOS DEL MOVILIZADO Y ACTIVIDADES</Text>

        {participants.map((participant, index) => (
          <React.Fragment key={index}>
            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.tableCell,
                  styles.subtitle,
                  styles.subt_content_green,
                ]}
              >
                TIPO DEL MOVILIZADO PARTICIPANTE / EJECUTOR{" "}
              </Text>
              <Text style={[styles.tableCell, styles.content]}>
                {participant.type}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.tableCell,
                  styles.subtitle,
                  styles.subt_content_green,
                ]}
              >
                APELLIDO(S) DEL MOVILIZADO / PARTICIPANTE / EJECUTOR
              </Text>
              <Text style={[styles.tableCell, styles.content]}>
                {participant.lastName}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text
                style={[
                  styles.tableCell,
                  styles.subtitle,
                  styles.subt_content_green,
                ]}
              >
                NOMBRE(S) DEL MOVILIZADO / PARTICIPANTE / EJECUTOR
              </Text>
              <Text style={[styles.tableCell, styles.content]}>
                {participant.firstName}
              </Text>
            </View>
          </React.Fragment>
        ))}
        <View style={styles.table}>
          {dataList.map((data, index) => (
            <React.Fragment key={index}>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content_green,
                  ]}
                >
                  ACTIVIDADES
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.actividades}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content_green,
                  ]}
                >
                  FECHA INICIO
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.f_inicio}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content_green,
                  ]}
                >
                  FECHA FIN
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.f_fin}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content_green,
                  ]}
                >
                  ÁREA DE CONOCIMIENTO
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.a_conocimiento}
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.subtitle,
                    styles.subt_content_green,
                  ]}
                >
                  FINANCIAMIENTO
                </Text>
                <Text style={[styles.tableCell, styles.content]}>
                  {data.financiamiento}
                </Text>
              </View>
            </React.Fragment>
          ))}
        </View>

        <Text style={styles.headtext}>APORTE A FUNCIONES SUSTANTIVAS </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_blue,
              ]}
            >
              APORTE A FUNCIÓN SUSTANTIVA: DOCENCIA
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_blue,
              ]}
            >
              APORTE A FUNCIÓN SUSTANTIVA: INVESTIGACIÓN
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_blue,
              ]}
            >
              APORTE A FUNCIÓN SUSTANTIVA: VINCULACIÓN
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_blue,
              ]}
            >
              APORTE A FUNCIÓN SUSTANTIVA.:DESARROLLO DOCENTE / ADMINISTRATIVO
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_blue,
              ]}
            >
              APORTE A FUNCIÓN SUSTANTIVA: INTERNACIONALIZACIÓN
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>
        <Text style={styles.headtext}>
          INDICADORES DE INTERNACIONALIZACIÓN{" "}
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 1 MOV. ESTUDIANTE ENTRANTE{" "}
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 2 MOV. ESTUDIANTE SALIENTE
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 3 GIRA ACADDÉMICA ENTRANTE
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 4 GIRA ACADÉMICA SALIENTE
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 5 MOV. DOCENTE ENTRANTE
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 6 MOV. DOCENTE SALIENTE
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 7 MOV. ADMINISTRATIVO SALIENTE
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 8 CONVENIO EFECTECTIVOS
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 9 PRODUCCIÓN CIENTÍFICA
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 10 INTERN. CURRÍCULO (COIL, IDV,
              TELECOLABORACIÓN)
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_cyan,
              ]}
            >
              INDICADOR OPCIÓN 11 INTERN. EN CASA (INTERCULTURALIDAD EN EL
              CAMPUS)
            </Text>
            <Text style={styles.tableCell}></Text>
          </View>
        </View>

        <Text style={styles.headtext}>EVIDENCIAS DE INTERNACIONALIZACIÓN </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.content,
                styles.subt_content_darkblue,
              ]}
            >
              Evidencia
            </Text>
            <Text style={[styles.tableCell, styles.content]}>
              Link por cada registro
            </Text>
          </View>
        </View>
        <Text style={styles.textEnd}>DOCUMENTOS DE RESPALDO/ANEXOS </Text>
        <Text style={styles.contentTextEnd}>Certificado de participación </Text>
        <Text style={styles.contentTextEnd}>Evidencia fotográfica </Text>
        <Text style={styles.contentTextEnd}>Lista de participantes </Text>
        <Text style={styles.contentTextEnd}>Invitación </Text>
        <Text style={styles.contentTextEnd}>Artículo científico </Text>
        <Text style={styles.contentTextEnd}>Otros </Text>

        <Text style={styles.textEnd}>Exportar a: </Text>
        <Text style={styles.contentTextEnd}>Excel </Text>
        <Text style={styles.contentTextEnd}>Word </Text>
        <Text style={styles.contentTextEnd}>PDF </Text>
        <Text style={styles.contentTextEnd}>Print </Text>
        <View style={styles.tableEnd}>
          <View style={styles.tableRowEnd}>
            <Text style={[styles.tableCellEnd, styles.subtitleEnd]}>
              Elaborado por:
            </Text>
            <Text style={[styles.tableCellEnd, styles.contentEnd]}>
              xxxxxxxxxxxx {"\n"} Docente Responsable
            </Text>
          </View>
          <View style={styles.tableRowEnd}>
            <Text style={[styles.tableCellEnd, styles.subtitleEnd]}>
              Revisado por:
            </Text>
            <Text style={[styles.tableCellEnd, styles.contentEnd]}>
              xxxxxxxxxxxx {"\n"} Coordinador de carrera
            </Text>
          </View>
          <View style={styles.tableRowEnd}>
            <Text style={[styles.tableCellEnd, styles.subtitleEnd]}>
              Aprobado por:
            </Text>
            <Text style={[styles.tableCellEnd, styles.contentEnd]}>
              Francisco Mila {"\n"} Responsable de internacionalización
            </Text>
          </View>
        </View>

        <View style={styles.table}></View>
      </View>
      <View style={styles.footer}>
        <Image src={ft}></Image>
      </View>
    </Page>
  </Document>
);

export default MyDocument;

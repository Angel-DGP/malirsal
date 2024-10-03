import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: "70px",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: "3px",
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
  details: {
    fontSize: "11px",
    fontWeight: "bold",
  },
  //Ultima tabla
  tableEnd: {
    display: "table",
    width: "auto",
    marginVertical: "3px",
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
  },
  contentEnd: {
    fontSize: "8px",
  },
});

const MyDocument = ({ dataList }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.title}>INFORME DE MOVILIDAD INTERNACIONAL</Text>
        <Text style={styles.headtext}>DATOS GENERALES</Text>
        <Text style={styles.details}>FECHA: </Text>
        <Text style={styles.details}>PERIODO ACADEMICO:</Text>
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
        <View style={styles.table}>
          <Text style={styles.headtext}>
            DATOS DEL MOVILIZADO Y ACTIVIDADES{" "}
          </Text>
          <br />
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
      </View>
    </Page>
  </Document>
);

export default MyDocument;

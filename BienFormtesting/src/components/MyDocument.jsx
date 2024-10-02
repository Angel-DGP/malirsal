import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  table: {
    display: "table",
    width: "auto",
    margin: "auto",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    border: "1pt solid black",
    padding: "5",
    width: "50%",
  },
  subtitle: {
    fontWeight: "bold",
  },
  header: {
    fontSize: "19px",
    backgroundColor: "#D9D9D9",
    textAlign: "center",
  },
});

const MyDocument = ({ dataList }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.header}>Datos del formulario:</Text>
        <View style={styles.table}>
          {dataList.map((data, index) => (
            <React.Fragment key={index}>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>Sede:</Text>
                <Text style={styles.tableCell}>{data.sede}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Código Carrera:
                </Text>
                <Text style={styles.tableCell}>{data.c_carrera}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Código Convenio:
                </Text>
                <Text style={styles.tableCell}>{data.c_convenio}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Nombre Convenio:
                </Text>
                <Text style={styles.tableCell}>{data.n_convenio}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Código Internacional:
                </Text>
                <Text style={styles.tableCell}>{data.c_internacional}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>País:</Text>
                <Text style={styles.tableCell}>{data.pais}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Actividades:
                </Text>
                <Text style={styles.tableCell}>{data.actividades}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Fecha de Inicio:
                </Text>
                <Text style={styles.tableCell}>{data.f_inicio}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Fecha de Fin:
                </Text>
                <Text style={styles.tableCell}>{data.f_fin}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  A Conocimiento:
                </Text>
                <Text style={styles.tableCell}>{data.a_conocimiento}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.subtitle]}>
                  Financiamiento:
                </Text>
                <Text style={styles.tableCell}>{data.financiamiento}</Text>
              </View>
            </React.Fragment>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;

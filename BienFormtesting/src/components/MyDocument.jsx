import { StyleSheet, View, Text, Page, Document } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: "10px",
  },
  parrafo: {
    fontSize: "11px",
    textAlign: "justify",
  },
});
export default function Mydocument() {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}></Page>
      <Text style={styles.parrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
        incidunt harum consequuntur? Nihil eius deserunt recusandae voluptatum
        voluptas similique sed exercitationem, assumenda ea aliquid impedit
        quidem ut possimus voluptate aut.
      </Text>
    </Document>
  );
}

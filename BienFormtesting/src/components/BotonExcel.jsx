import React from "react";
import * as XLSX from "xlsx-js-style";

const BotonExcel = ({ dataCSV }) => {
  const generateHeaders = () => [
    { label: "SEDE", key: "sede" },
    { label: "CÓDIGO CARRERA", key: "c_carrera" },
    { label: "CÓDIGO CONVENIO", key: "c_convenio" },
    { label: "NOMBRE DEL CONVENIO", key: "n_convenio" },
    { label: "CONTRAPARTE INTERNACIONAL", key: "c_internacional" },
    { label: "PAÍS", key: "pais" },
    { label: "ACTIVIDADES", key: "actividades" },
    { label: "FECHA INICIO", key: "f_inicio" },
    { label: "FECHA FIN", key: "f_fin" },
    { label: "ÁREA DE CONOCIMIENTO", key: "a_conocimiento" },
    { label: "FINANCIAMIENTO", key: "financiamiento" },
  ];

  const transformDataForParticipants = (data) => data;

  const exportToExcel = () => {
    const headers = generateHeaders();
    const transformedData = transformDataForParticipants(dataCSV);

    const ws = XLSX.utils.aoa_to_sheet([[]]);

    ws["!rows"] = [
      { hpt: 30 },
      { hpt: 20 },
      { hpt: 20 },
      { hpt: 20 },
      { hpt: 20 },
      { hpt: 72 },
    ];

    // Ajustar el ancho de columnas
    ws["!cols"] = [
      { wch: 20 },  // Columna A
      { wch: 20 },  // Columna B
      { wch: 20 },  // Columna C
      { wch: 27.86 }, // Columna D
      { wch: 34.86 }, // Columna E
      { wch: 20 },  // Columna F
      { wch: 20 },  // Columna G
      { wch: 20 },  // Columna H
      { wch: 20 },  // Columna I
      { wch: 27.86 },  // Columna J
      { wch: 20 },  // Columna K
      { wch: 20 },  // Columna L
    ];

    const titleStyle = {
      font: { name: "Arial Rounded MT Bold", bold: true, sz: 14 },
      alignment: { horizontal: "left", vertical: "center" },
    };

    const subtitleStyle = {
      font: { name: "Arial Rounded MT Bold", bold: true, sz: 12, color: { rgb: "000000" } },
      alignment: { horizontal: "center", vertical: "center" },
      // Sin color de fondo
    };

    const headerStyleLeftAligned = {
      font: { bold: true, color: { rgb: "000000" } },
      fill: { fgColor: { rgb: "D9E1F2" } },
      alignment: { horizontal: "center", vertical: "center" },
      border: {
        top: { style: "thin", color: { rgb: "000000" } },
        bottom: { style: "thin", color: { rgb: "000000" } },
        left: { style: "thin", color: { rgb: "000000" } },
        right: { style: "thin", color: { rgb: "000000" } },
      },
    };

    // Estilo para celdas A2 y A3 sin fondo
    const noFillStyle = {
      font: { name: "Arial Rounded MT Bold", bold: true, sz: 12, color: { rgb: "000000" } },
      alignment: { horizontal: "left", vertical: "center" },
    };

    ws["A1"] = { v: "PONTIFICIA UNIVERSIDAD CATÓLICA DEL ECUADOR", s: titleStyle };
    ws["A2"] = { v: "COORDINACIÓN DE INFORMACIÓN Y ESTADÍSTICAS", s: noFillStyle };
    ws["A3"] = { v: "INTERNACIONALIZACIÓN", s: noFillStyle };

    headers.forEach((header, index) => {
      const cellAddress = { c: index, r: 5 };
      const cellRef = XLSX.utils.encode_cell(cellAddress);

      ws[cellRef] = { 
        v: header.label,
        s: {
          ...headerStyleLeftAligned,
          fill: { fgColor: { rgb: index < 6 ? "D9E1F2" : "C6E0B4" } },
        },
      };
    });

    // Aplicar bordes a las celdas de A6 a L6
    for (let colIndex = 0; colIndex < 12; colIndex++) { // De A (0) a L (11)
      const cellAddress = { c: colIndex, r: 5 }; // Fila 6 (índice 5)
      const cellRef = XLSX.utils.encode_cell(cellAddress);
      if (ws[cellRef]) {
        ws[cellRef].s.border = {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } },
        };
      }
    }

    const dataStartRow = 6 + 1;

    XLSX.utils.sheet_add_json(ws, transformedData, {
      header: headers.map((header) => header.key),
      skipHeader: true,
      origin: { r: dataStartRow, c: 0 },
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos");

    XLSX.writeFile(wb, "datos_exportados.xlsx");
  };

  return (
    <div>
      <button onClick={exportToExcel}>Exportar a Excel</button>
    </div>
  );
};

export default BotonExcel;









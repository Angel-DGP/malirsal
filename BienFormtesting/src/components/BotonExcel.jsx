import React from "react";
import * as XLSX from "xlsx";

const BotonExcel = ({ dataCSV }) => {
  const generateHeaders = () => [
    { label: "SEDE", key: "sede" },
    { label: "CÓDIGO CARRERA", key: "c_carrera" },
    { label: "CÓDIGO CONVENIO INTERNACIONAL", key: "c_internacional" },
    { label: "NOMBRE DEL CONVENIO / CONVOCATORIA / EVENTO INTERNACIONAL", key: "n_convenio" },
    { label: "CONTRAPARTE INTERNACIONAL", key: "c_internacional" },
    { label: "PAÍS", key: "pais" },
    { label: "ACTIVIDADES", key: "actividades" },
    { label: "FECHA INICIO", key: "f_inicio" },
    { label: "FECHA FIN", key: "f_fin" },
    { label: "ÁREA DE CONOCIMIENTO", key: "a_conocimiento" },
    { label: "FINANCIAMIENTO", key: "financiamiento" },
    { label: "EVIDENCIA", key: "evidencia" },
  ];

  const transformDataForParticipants = (data) => {
    return data;
  };

  const exportToExcel = () => {
    const headers = generateHeaders();
    const transformedData = transformDataForParticipants(dataCSV);

    // Crear una hoja de trabajo vacía
    const ws = XLSX.utils.aoa_to_sheet([[]]);

    // Configurar las filas para el título, subtítulo y encabezados
    ws["!rows"] = [
      { hpt: 30 }, // Altura de la fila 1
      { hpt: 20 }, // Altura de la fila 2 para el subtítulo
      { hpt: 20 }, // Altura de la fila 3 para el subtítulo
      { hpt: 20 }, // Altura de la fila 4 para los encabezados vacíos
      { hpt: 20 }, // Altura de la fila 5 para los encabezados vacíos
      { hpt: 72 }, // Altura de la fila 6 para los encabezados de columna
    ];

    ws["!cols"] = headers.map(() => ({ wch: 20 })); // Ajustar ancho de columnas

    const titleStyle = {
      font: { bold: true, sz: 14 },
      alignment: { horizontal: "center", vertical: "center" },
    };
    
    const subtitleStyle = {
      font: { bold: true, sz: 12, color: { rgb: "000000" } },
      alignment: { horizontal: "center", vertical: "center" },
      fill: { fgColor: { rgb: "FFFFE0" } }, // Color de fondo
    };
    
    const headerStyle = {
      font: { bold: true, color: { rgb: "000000" } },
      fill: { fgColor: { rgb: "FFFF00" } }, // Color de fondo
      alignment: { horizontal: "center" },
    };

    // Agregar título y subtítulo
    ws["A1"] = { v: "PONTIFICIA UNIVERSIDAD CATÓLICA DEL ECUADOR", s: titleStyle };
    ws["A2"] = { v: "COORDINACIÓN DE INFORMACIÓN Y ESTADÍSTICAS", s: subtitleStyle };
    ws["A3"] = { v: "INTERNACIONALIZACIÓN", s: subtitleStyle };

    // Agregar encabezados en la fila 6
    headers.forEach((header, index) => {
      const cellAddress = { c: index, r: 5 }; // Encabezados empiezan en la fila 6 (índice 5)
      const cellRef = XLSX.utils.encode_cell(cellAddress);
      ws[cellRef] = { v: header.label, s: headerStyle };
    });

    const dataStartRow = 6 + 1; // La fila siguiente a los encabezados

    // Agregar datos
    XLSX.utils.sheet_add_json(ws, transformedData, {
      header: headers.map((header) => header.key),
      skipHeader: true,
      origin: { r: dataStartRow, c: 0 },
    });

    // Aplicar un formato básico a todas las celdas de datos
    const dataEndRow = dataStartRow + transformedData.length - 1;
for (let row = dataStartRow; row <= dataEndRow; row++) {
  headers.forEach((_, colIndex) => {
    const cellAddress = XLSX.utils.encode_cell({ c: colIndex, r: row });
    if (ws[cellAddress]) {
      ws[cellAddress].s = {
        font: { sz: 11, color: { rgb: "000000" } },
        alignment: { horizontal: "center", vertical: "center" },
        border: {
          top: { style: "thin", color: { rgb: "000000" } },
          bottom: { style: "thin", color: { rgb: "000000" } },
          left: { style: "thin", color: { rgb: "000000" } },
          right: { style: "thin", color: { rgb: "000000" } },
        },
      };
    }
  });
}

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos");

    XLSX.writeFile(wb, "datos_exportados.xlsx");
  };

  return (
    <div>
      <button onClick={exportToExcel} className="btn btn-primary">Exportar a Excel</button>
    </div>
  );
};

export default BotonExcel;




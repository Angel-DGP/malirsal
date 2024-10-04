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
    { label: "APORTE A FUNCIÓN SUSTANTIVA. DOCENCIA", key: "aporte_docencia" },
    {
      label: "APORTE A FUNCIÓN SUSTANTIVA. INVESTIGACIÓN",
      key: "aporte_investigacion",
    },
    {
      label: "APORTE A FUNCIÓN SUSTANTIVA. VINCULACIÓN",
      key: "aporte_vinculacion",
    },
    {
      label: "APORTE A FUNCIÓN SUSTANTIVA. DESARROLLO DOCENTE / ADMINISTRATIVO",
      key: "aporte_desarrollo_docente",
    },
    {
      label: "APORTE A FUNCIÓN SUSTANTIVA. INTERNACIONALIZACIÓN",
      key: "aporte_internacionalizacion",
    },
    {
      label: "INDICADOR OPCIÓN 1 MOV. EST. ENTR.",
      key: "indicador_op1_mov_est_entr",
    },
    {
      label: "INDICADOR OPCIÓN 2 MOV. EST. SALIEN.",
      key: "indicador_op2_mov_est_salien",
    },
    {
      label: "INDICADOR OPCIÓN 3 GIRA ACAD. ENTR",
      key: "indicador_op3_gira_acad_entr",
    },
    {
      label: "INDICADOR OPCIÓN 4 GIRA ACAD. SALIEN",
      key: "indicador_op4_gira_acad_salien",
    },
    {
      label: "INDICADOR OPCIÓN 5 MOV. DOC. ENTR.",
      key: "indicador_op5_mov_doc_entr",
    },
    {
      label: "INDICADOR OPCIÓN 6 MOV. DOC. SALIE.",
      key: "indicador_op6_mov_doc_salie",
    },
    {
      label: "INDICADOR OPCIÓN 7 MOV. ADM. SALIE.",
      key: "indicador_op7_mov_adm_salie",
    },
    {
      label: "INDICADOR OPCIÓN 8 CONVENIO EFECT.",
      key: "indicador_op8_convenio_efect",
    },
    {
      label: "INDICADOR OPCIÓN 9 PROD. CIENTÍFIC.",
      key: "indicador_op9_prod_cientific",
    },
    {
      label:
        "INDICADOR OPCIÓN 10 INTERN. CURRÍCULO (COIL, IDV, TELECOLABORACIÓN)",
      key: "indicador_op10_intern_curriculo",
    },
    {
      label:
        "INDICADOR OPCIÓN 11 INTERN. EN CASA (INTERCULTURALIDAD EN EL CAMPUS)",
      key: "indicador_op11_intern_en_casa",
    },
    { label: "EVIDENCIA", key: "evidencia" },
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
    ws["!cols"] = [
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 27.86 },
      { wch: 34.86 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 27.86 },
      { wch: 20 },
      { wch: 20 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 34.86 },
      { wch: 54.86 },
      { wch: 54.86 },
    ];

    const titleStyle = {
      font: { name: "Arial Rounded MT Bold", bold: true, sz: 14 },
      alignment: { horizontal: "left", vertical: "center" },
    };

    const headerStyle = {
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

    const noFillStyle = {
      font: {
        name: "Arial Rounded MT Bold",
        bold: true,
        sz: 12,
        color: { rgb: "000000" },
      },
      alignment: { horizontal: "left", vertical: "center" },
    };

    ws["A1"] = {
      v: "PONTIFICIA UNIVERSIDAD CATÓLICA DEL ECUADOR",
      s: titleStyle,
    };
    ws["A2"] = {
      v: "COORDINACIÓN DE INFORMACIÓN Y ESTADÍSTICAS",
      s: noFillStyle,
    };
    ws["A3"] = { v: "INTERNACIONALIZACIÓN", s: noFillStyle };

    headers.forEach((header, index) => {
      const cellAddress = { c: index, r: 5 };
      const cellRef = XLSX.utils.encode_cell(cellAddress);

      ws[cellRef] = {
        v: header.label,
        s: {
          ...headerStyle,
          fill: { fgColor: { rgb: index < 6 ? "D9E1F2" : "C6E0B4" } },
        },
      };
    });

    const colors = [
      { start: 11, end: 15, color: "9BC2E6" },
      { start: 16, end: 26, color: "FFE699" },
      { start: 27, end: 27, color: "ACB9CA" },
    ];

    colors.forEach(({ start, end, color }) => {
      for (let colIndex = start; colIndex <= end; colIndex++) {
        const cellAddress = { c: colIndex, r: 5 };
        const cellRef = XLSX.utils.encode_cell(cellAddress);
        if (ws[cellRef]) {
          ws[cellRef].s.fill = { fgColor: { rgb: color } };
          ws[cellRef].s.border = {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } },
          };
        }
      }
    });

    const dataStartRow = 6 + 1;

    const dataStyle = {
      alignment: { horizontal: "center", vertical: "center" },
    };

    XLSX.utils.sheet_add_json(ws, transformedData, {
      header: headers.map((header) => header.key),
      skipHeader: true,
      origin: { r: dataStartRow, c: 0 },
    });

    for (
      let rowIndex = dataStartRow;
      rowIndex < dataStartRow + transformedData.length;
      rowIndex++
    ) {
      for (let colIndex = 0; colIndex < headers.length; colIndex++) {
        const cellAddress = { c: colIndex, r: rowIndex };
        const cellRef = XLSX.utils.encode_cell(cellAddress);
        if (ws[cellRef]) {
          ws[cellRef].s = { ...dataStyle };
        }
      }
    }

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Datos");

    XLSX.writeFile(wb, "datos_exportados.xlsx");
  };

  return (
    <div>
      <button onClick={exportToExcel} className="btn btn-primary">
        Exportar a Excel
      </button>
    </div>
  );
};

export default BotonExcel;

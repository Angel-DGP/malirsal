import React, { useState } from "react";
import { Formik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import BotonExcel from "./BotonExcel";

export default function FormLogins() {
  const [formData, setFormData] = useState([]);

  return (
    <>
      <Formik
        validate={(valores) => {
          let errores = {};
          if (!valores.sede) {
            errores.sede = "Escriba el nombre de la SEDE";
          }
          if (!valores.c_carrera) {
            errores.c_carrera = "Escriba el Codigo de la Carrera";
          }
          if (!valores.c_convenio) {
            errores.c_convenio = "Escriba el Codigo del Convenio";
          }
          if (!valores.n_convenio) {
            errores.n_convenio = "Escriba el Nombre del Convenio";
          }
          if (!valores.c_internacional) {
            errores.c_internacional = "Escriba la Contraparte Internacional";
          }
          if (!valores.pais) {
            errores.pais = "Escriba el País";
          }
          if (!valores.actividades) {
            errores.actividades = "Escriba las actividades";
          }
          if (!valores.f_inicio) {
            errores.f_inicio = "Escriba la Fecha de Inicio";
          }
          if (!valores.f_fin) {
            errores.f_fin = "Escriba la Fecha de Fin";
          }
          if (!valores.a_conocimiento) {
            errores.a_conocimiento = "Escriba el Área de Conocimiento";
          }
          if (!valores.financiamiento) {
            errores.financiamiento = "Escriba el nombre del Financiamiento";
          }
          return errores;
        }}
        initialValues={{
          sede: "",
          c_carrera: "",
          c_convenio: "",
          n_convenio: "",
          c_internacional: "",
          pais: "",
          actividades: "",
          f_inicio: "",
          f_fin: "",
          a_conocimiento: "",
          financiamiento: "",
        }}
        onSubmit={(values) => {
          setFormData((prevData) => [...prevData, values]);
          console.log("Formulario enviado", values);
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div className="container text-center">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="sede">Sede</label>
                  <input
                    type="text"
                    id="sede"
                    name="sede"
                    placeholder="Escriba la Sede"
                    value={values.sede}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.sede && <div className="error">{errors.sede}</div>}
                </div>
                <div className="col-4">
                  <label htmlFor="c_carrera">Codigo de Carrera</label>
                  <input
                    type="text"
                    id="c_carrera"
                    name="c_carrera"
                    placeholder="Escriba el Codigo de Carrera"
                    value={values.c_carrera}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.c_carrera && (
                    <div className="error">{errors.c_carrera}</div>
                  )}
                </div>
                <div className="col-4">
                  <label htmlFor="c_convenio">Codigo de Convenio</label>
                  <input
                    type="text"
                    id="c_convenio"
                    name="c_convenio"
                    placeholder="Escriba el Codigo de Convenio"
                    value={values.c_convenio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.c_convenio && (
                    <div className="error">{errors.c_convenio}</div>
                  )}
                </div>
              </div>

              <br />
              <div className="row">
                <div className="col">
                  <label htmlFor="n_convenio">Nombre del Convenio</label>
                  <input
                    type="text"
                    id="n_convenio"
                    name="n_convenio"
                    placeholder="Escriba el Nombre del Convenio"
                    value={values.n_convenio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.n_convenio && (
                    <div className="error">{errors.n_convenio}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="c_internacional">
                    Contraparte Internacional
                  </label>
                  <input
                    type="text"
                    id="c_internacional"
                    name="c_internacional"
                    placeholder="Escriba la Contraparte Internacional"
                    value={values.c_internacional}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.c_internacional && (
                    <div className="error">{errors.c_internacional}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="pais">País</label>
                  <input
                    type="text"
                    id="pais"
                    name="pais"
                    placeholder="Escriba el País"
                    value={values.pais}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.pais && <div className="error">{errors.pais}</div>}
                </div>
              </div>

              <br />
              <div className="row">
                <div className="col">
                  <label htmlFor="actividades">Actividades</label>
                  <input
                    type="text"
                    id="actividades"
                    name="actividades"
                    placeholder="Actividades"
                    value={values.actividades}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.actividades && (
                    <div className="error">{errors.actividades}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="f_inicio">Fecha de Inicio</label>
                  <input
                    type="date"
                    id="f_inicio"
                    name="f_inicio"
                    placeholder="dd/mm/aaaa"
                    value={values.f_inicio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.f_inicio && (
                    <div className="error">{errors.f_inicio}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="f_fin">Fecha Fin</label>
                  <input
                    type="date"
                    id="f_fin"
                    name="f_fin"
                    placeholder="dd/mm/aaaa"
                    value={values.f_fin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.f_fin && <div className="error">{errors.f_fin}</div>}
                </div>
              </div>

              <br />
              <div className="row">
                <div className="col">
                  <label htmlFor="a_conocimiento">Área de Conocimiento</label>
                  <input
                    type="text"
                    id="a_conocimiento"
                    name="a_conocimiento"
                    placeholder="Escriba el Área de Conocimiento"
                    value={values.a_conocimiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.a_conocimiento && (
                    <div className="error">{errors.a_conocimiento}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="financiamiento">Financiamiento</label>
                  <input
                    type="text"
                    id="financiamiento"
                    name="financiamiento"
                    placeholder="Escriba el Financiamiento"
                    value={values.financiamiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.financiamiento && (
                    <div className="error">{errors.financiamiento}</div>
                  )}
                </div>
              </div>

              <br />
              <button type="submit">Guardar</button>
            </div>
          </form>
        )}
      </Formik>

      {}
      <BotonExcel dataCSV={formData} />
    </>
  );
}


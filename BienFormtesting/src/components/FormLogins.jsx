import React from "react";
import { Formik } from "formik";

export default function FormLogins() {
  return (
    <>
      <Formik
        validate={(valores) => {
          let errores = {};
          //Error Sede
          if (!valores.sede) {
            errores.sede = "Escriba el nombre de la SEDE";
          }
          //Error Codigo Carrera
          if (!valores.c_carrera) {
            errores.c_carrera = "Escriba el Codigo de la Carrera";
          }
          //Error Codigo Convenio
          if (!valores.c_convenio) {
            errores.c_convenio = "Escriba el Codigo del Convenio";
          }
          //Error Nombre Convenio
          if (!valores.n_convenio) {
            errores.n_convenio = "Escriba el Nombre del Convenio";
          }
          //Error Contraparte Interacional
          if (!valores.c_internacional) {
            errores.c_internacional = "Escriba la Contraparte Internacional";
          }
          //Error Pais
          if (!valores.pais) {
            errores.pais = "Escriba el Pais";
          }
          //Error Actividades
          if (!valores.actividades) {
            errores.actividades = "Escriba las actividades";
          }
          //Error Fecha Inicio
          if (!valores.f_inicio) {
            errores.f_inicio = "Escriba la Fecha de Incio";
          }
          //Error Fecha Fin
          if (!valores.f_fin) {
            errores.f_fin = "Escriba la Fecha de Fin";
          }
          //Error Area Conocimiento
          if (!valores.a_conocimiento) {
            errores.a_conocimiento = "Escriba el Area de Conocimiento";
          }
          //Error Financiamiento
          if (!valores.financiamiento) {
            errores.financiamiento = "Escriba el nombre del Financiamiento";
          }
          return errores;
        }}
        initialValues={{
          sede: "",
          c_carrera: "",
        }}
        onSubmit={() => {
          console.log("Formulario enviado");
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}
            <div className="container text-center">
              <div className="row">
                <div className="col-4">
                  <div className="">
                    <label htmlFor="sede">Sede</label>
                    <br />
                    <input
                      type="text"
                      id="sede"
                      name="sede"
                      placeholder="Escriba la Sede"
                      value={values.sede}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.sede && <div className="error">{errors.sede}</div>}
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 border bg-light">
                    <label htmlFor="c_carrera">Codigo de Carrera</label>
                    <input
                      type="text"
                      id="c_carrera"
                      name="c_carrera"
                      placeholder="Escriba el Codigo de Carrera"
                      value={values.c_carrera}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.sede && (
                      <div className="error">{errors.c_carrera}</div>
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3 border bg-light">
                    <label htmlFor="c_convenio">Codigo de Convenio</label>
                    <input
                      type="text"
                      id="c_convenio"
                      name="c_convenio"
                      placeholder="Escriba el Codigo de Convenio"
                      value={values.c_convenio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.sede && (
                      <div className="error">{errors.c_convenio}</div>
                    )}
                  </div>
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
                  ></input>
                  {errors.sede && (
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
                  ></input>
                  {errors.sede && (
                    <div className="error">{errors.c_internacional}</div>
                  )}
                </div>
                <div className="col">
                  <label htmlFor="pais">País</label>
                  <input
                    type="text"
                    id="pais"
                    name="pais"
                    placeholder="Escriba el Pais"
                    value={values.pais}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {errors.sede && <div className="error">{errors.pais}</div>}
                </div>
              </div>
              <br />
              <div className="row">
                <div>
                  <label htmlFor="actividades">Actividades</label>
                  <input
                    type="text"
                    id="actividades"
                    name="actividades"
                    placeholder="Actividades"
                    value={values.actividades}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {errors.sede && (
                    <div className="error">{errors.actividades}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="f_inicio">Fecha de Inicio</label>
                  <input
                    type="date"
                    id="f_inicio"
                    name="f_inicio"
                    placeholder="dd/mm/aaaa"
                    value={values.f_inicio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {errors.sede && (
                    <div className="error">{errors.f_inicio}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="f_fin">Fecha Fin</label>
                  <input
                    type="date"
                    id="f_fin"
                    name="f_fin"
                    placeholder="dd/mm/aaaa"
                    value={values.f_fin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {errors.sede && <div className="error">{errors.f_fin}</div>}
                </div>
              </div>
              <br></br>
              <div className="row">
                <div>
                  <label htmlFor="a_conocimiento">Area de Conocimiento</label>
                  <input
                    type="text"
                    id="a_conocimiento"
                    name="a_conocimiento"
                    placeholder="Escriba el Area de Conocimiento"
                    value={values.a_conocimiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {errors.sede && (
                    <div className="error">{errors.a_conocimiento}</div>
                  )}
                </div>
                <div>
                  <label htmlFor="financiamiento">Financiamiento</label>
                  <input
                    type="text"
                    id="financiamiento"
                    name="financiamiento"
                    placeholder="Escriba el Financiamiento"
                    value={values.financiamiento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  {errors.sede && (
                    <div className="error">{errors.financiamiento}</div>
                  )}
                </div>
              </div>
              <br></br>
              <button type="submit">Guardar</button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

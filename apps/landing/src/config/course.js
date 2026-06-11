// src/config/course.js
// Única fuente de verdad para datos del curso.
// CourseSection y Header leen de aquí — nunca dupliques estos números.

export const COURSE = {
  price: 589,
  currency: "MXN",
  weeks: 6,
  groups: 2,
  groupSize: 15,
  spotsTotal: 30,
  spotsRemaining: 11, // <-- edita SOLO aquí cuando se llenen cupos
};

// Modo del micro-indicador de cupos en el header:
//   "dynamic" -> lee COURSE.spotsRemaining (recomendado)
//   "static"  -> usa HEADER_SPOTS_STATIC_LABEL
//   "off"     -> no se muestra (urgencia solo en las secciones)
export const HEADER_SPOTS_MODE = "static";
export const HEADER_SPOTS_STATIC_LABEL = "Cupos limitados";
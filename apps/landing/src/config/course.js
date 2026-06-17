// src/config/course.js
// Única fuente de verdad para datos del curso.
// Header y CourseSection leen de aquí — nunca dupliques estos números.

export const ENROLLMENT_STATUS = {
  UPCOMING: "upcoming", // aún no abren
  OPEN: "open",         // inscripciones abiertas
  CLOSED: "closed",     // cerradas (cupo lleno o periodo terminado)
};

const spotsTotal = 30; // 2 grupos × 15
const spotsTaken = 0;  // <-- sube este número conforme se inscriban

export const COURSE = {
  name: "Web Launchpad",
  price: 589,
  currency: "MXN",
  fullValue: 14300,
  weeks: 6,
  groups: 2,
  groupSize: 15,

  spotsTotal,
  spotsTaken,
  spotsRemaining: spotsTotal - spotsTaken,

  // ── Palanca de inscripciones ──
  // Cambiar SOLO esta línea para abrir/cerrar la sección completa. ---> UPCOMMING | OPEN | CLOSED
  enrollmentStatus: ENROLLMENT_STATUS.UPCOMING,
  enrollmentOpensAt: "2026-07-06", // ISO "YYYY-MM-DD"; null si aún sin fecha
  enrollUrl: "#inscripcion",       // checkout/form cuando esté ABIERTO
  waitlistUrl: "#lista-espera",    // captura de leads en upcoming/closed
};

// ── Header (micro-indicador de cupos) ──
export const HEADER_SPOTS_MODE = "off"; // "dynamic" | "static" | "off"
export const HEADER_SPOTS_STATIC_LABEL = "Cupos limitados";
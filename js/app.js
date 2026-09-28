(function () {
  let translations = {
    es: {
      "nav.inicio": "Inicio", "nav.proyectos": "Proyectos", "nav.educacion": "Educación", "nav.contacto": "Contacto",
      "common.verDetalle": "Ver detalle", "common.volver": "Volver a inicio", "common.rol": "Mi rol",
      "common.funcionalidades": "Funcionalidades clave", "common.capturas": "Capturas del sistema",
      "common.notaPrivado": "Código fuente privado por acuerdo de confidencialidad con el cliente.",
      "common.cerrar": "Cerrar", "common.anterior": "Anterior", "common.siguiente": "Siguiente",
      "common.copiarDiscord": "Copiar usuario de Discord", "common.temaAria": "Cambiar tema de color",
      "common.idiomaAria": "Cambiar idioma", "common.verCodigo": "Ver código en GitHub →",

      "home.title": "Deivy Torres | Arquitecto de software",
      "home.metaDesc": "Portafolio de Deivy Torres, arquitecto de software.",
      "home.status": "Disponible para nuevos proyectos", "home.rol": "Ingeniero en sistemas",
      "home.desc": "¿Tu negocio necesita automatizar procesos o digitalizarse? Te diseño una solución a tu medida, pensada para ahorrarte tiempo y dinero, y para ayudarte a ganar clientes.",
      "home.cta": "Enlaces",
      "home.edureg.desc": "Sistema de gestión escolar con matrículas, pagos por cuotas y control financiero por dashboard.",
      "home.secondbrain.desc": "Gestor personal de conocimiento con notas en Markdown, temas y analítica de productividad.",
      "home.plangym.desc": "Sistema de gestión de membresías para gimnasios con control de socios, pagos y asistencia por QR.",
      "home.helpdesk.desc": "Plataforma de tickets de soporte técnico con roles, historial de auditoría y reportes de desempeño.",
      "home.preguntario.desc": "Sistema de encuestas con creación de cuestionarios, asignación a evaluados y resultados automáticos.",
      "home.agendatucita.desc": "Sistema de citas médicas con generación automática de horarios disponibles y confirmación en tiempo real.",
      "home.dermasure.desc": "Apoyo diagnóstico con IA para detección de Carcinoma Basocelular, con estimación de incertidumbre.",
      "home.asistenciax.desc": "Control de asistencia laboral con horarios, breaks y validaciones automáticas por área.",
      "home.edu.carrera": "Ingeniería en sistemas", "home.edu.universidad": "Universidad Privada San Juan Bautista",

      "edureg.metaDesc": "Sistema de gestión escolar.",
      "edureg.summary": "Sistema de gestión escolar para administrar matrícula, pagos y organización académica de una institución educativa, con control financiero en tiempo real.",
      "edureg.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura en Laravel, el modelo de datos y la lógica de matrícula, pagos y control de deuda, con interfaz en Tailwind.",
      "edureg.f1": "Gestión académica de alumnos, apoderados, años escolares, grados, salones y secciones.",
      "edureg.f2": "Proceso de matrícula con validación de cupos disponibles y bloqueo de matrículas duplicadas por año.",
      "edureg.f3": "Generación automática de cuotas mensuales con sus fechas de vencimiento al matricular a un alumno.",
      "edureg.f4": "Registro de pagos con bloqueo de cuotas fuera de secuencia y anulación auditada por motivo.",
      "edureg.f5": "Detección automática de deuda y pagos atrasados según la fecha de vencimiento de cada cuota.",
      "edureg.f6": "Dashboard con métricas de matrícula activa, deuda acumulada y facturación del año escolar.",

      "secondbrain.metaDesc": "Gestor personal de conocimiento de escritorio.",
      "secondbrain.summary": "Aplicación de escritorio para capturar notas, ideas e imágenes, organizarlas por temas y analizar el propio proceso de trabajo con métricas de productividad.",
      "secondbrain.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura en capas del backend, el modelo de datos y los casos de uso, además de la interfaz de escritorio y la comunicación entre módulos.",
      "secondbrain.f1": "Editor de notas en Markdown con vista previa en tiempo real, para capturar ideas sin perder el formato.",
      "secondbrain.f2": "Cronómetro integrado por nota que mide el tiempo dedicado a cada idea o investigación.",
      "secondbrain.f3": "Organización del conocimiento por temas y categorías, agrupando notas e imágenes de forma jerárquica.",
      "secondbrain.f4": "Panel de analítica personal con métricas de productividad: tiempo invertido, palabras escritas, sesiones de trabajo y diversidad léxica.",
      "secondbrain.f5": "Arquitectura en capas (Clean Architecture) con comunicación por eventos entre módulos, pensada para mantener el sistema fácil de escalar y modificar.",

      "plangym.metaDesc": "Sistema de gestión de membresías para gimnasios.",
      "plangym.summary": "Sistema web de membresías para gimnasios, con control de socios, planes, pagos y asistencias, desarrollado a medida según los requerimientos del cliente.",
      "plangym.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura MVC en PHP, el modelo de datos en MySQL y las reglas de negocio de membresías, pagos y asistencia.",
      "plangym.f1": "Control de acceso por roles (superadmin, admin, recepcionista), cada uno con permisos y vistas distintas.",
      "plangym.f2": "Gestión de socios, planes y membresías, con validación de duplicados, vencimientos y estados en curso/finalizada/cancelada.",
      "plangym.f3": "Registro de pagos con distintos métodos, cancelación auditada por motivo y reemplazo de pago sin perder el historial.",
      "plangym.f4": "Control de asistencia mediante código QR único por socio, validando membresía y pago activos antes de permitir el ingreso.",
      "plangym.f5": "Notificaciones automáticas de vencimiento próximo, con contador de alertas en tiempo real.",
      "plangym.f6": "Dashboard con métricas de ingresos mensuales, plan favorito y método de pago más usado.",
      "plangym.f7": "Reportes de pagos y membresías filtrables por mes, año y estado.",

      "helpdesk.metaDesc": "Plataforma de tickets de soporte técnico.",
      "helpdesk.summary": "Plataforma web de tickets de soporte técnico e incidencias, con roles diferenciados para solicitantes, técnicos, supervisores y administradores.",
      "helpdesk.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura MVC en PHP, el modelo de datos en MySQL y las reglas de permisos, ciclo de vida de tickets y reportes.",
      "helpdesk.f1": "Control de acceso por 4 roles (superadmin, supervisor, técnico, solicitante), cada uno con permisos y vistas propias.",
      "helpdesk.f2": "Bandeja de tickets con visibilidad según rol: cada usuario ve solo lo que le corresponde crear, atender o supervisar.",
      "helpdesk.f3": "Ciclo de vida de tickets controlado (abierto → en proceso → cerrado), sin permitir retrocesos ni saltos de estado.",
      "helpdesk.f4": "Comentarios públicos e internos, con reglas distintas de visibilidad para solicitantes y técnicos.",
      "helpdesk.f5": "Asignación de técnicos con reglas de negocio para evitar reasignar un ticket ya atendido.",
      "helpdesk.f6": "Gestión de usuarios, áreas y categorías con eliminación lógica y restauración de registros.",
      "helpdesk.f7": "Dashboard y reportes con métricas de tiempos de atención, filtrables por técnico, categoría y periodo.",

      "preguntario.metaDesc": "Sistema de gestión de encuestas.",
      "preguntario.summary": "Sistema de encuestas para crear cuestionarios con distintos tipos de pregunta, asignarlos a evaluados y consultar resultados y estadísticas automáticas por pregunta.",
      "preguntario.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura MVC en PHP, el modelo de datos en MySQL y la lógica de asignación, respuesta y cálculo de resultados.",
      "preguntario.f1": "Constructor de cuestionarios con 6 tipos de pregunta (opción única, múltiple, Likert, numérica, booleana y texto libre).",
      "preguntario.f2": "Asignación de encuestas a evaluados específicos, con seguimiento de estado pendiente/completado por persona.",
      "preguntario.f3": "Validación de preguntas obligatorias y control de respuestas duplicadas antes de aceptar el envío.",
      "preguntario.f4": "Cálculo automático de resultados: conteo por opción, promedios y porcentaje de avance por cuestionario.",
      "preguntario.f5": "Vista de resultados individual por evaluado y consolidado por cuestionario, incluyendo respuestas de texto libre.",
      "preguntario.f6": "Dashboard con indicadores de tasa de finalización y tipos de pregunta más utilizados.",

      "agendatucita.metaDesc": "Sistema de citas médicas.",
      "agendatucita.summary": "Sistema de citas médicas para gestionar pacientes, médicos, especialidades, horarios y reservas de una clínica o consultorio, con generación automática de disponibilidad.",
      "agendatucita.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura MVC en PHP, el modelo de datos en MySQL y la lógica de generación de horarios, reserva de citas y notificaciones.",
      "agendatucita.f1": "Control de acceso por 3 roles (administrador, recepcionista, médico), cada uno con su propio flujo de trabajo.",
      "agendatucita.f2": "Generación automática de slots de citas a partir de los horarios del médico y la duración configurada por especialidad.",
      "agendatucita.f3": "Flujo completo de reserva: búsqueda de paciente por DNI, selección de especialidad, médico y horario disponible.",
      "agendatucita.f4": "Gestión de citas con estados controlados (pendiente, confirmada, cancelada) y confirmación exclusiva por parte del médico.",
      "agendatucita.f5": "Historial clínico consultable por DNI, tanto desde la perspectiva del paciente como del médico.",
      "agendatucita.f6": "Notificaciones en tiempo real ante creación, confirmación o cancelación de una cita.",

      "dermasure.metaDesc": "Apoyo diagnóstico dermatológico con IA.",
      "dermasure.summary": "Sistema de apoyo diagnóstico preliminar para detección de Carcinoma Basocelular mediante análisis de imágenes dermatoscópicas, desarrollado como soporte a un proyecto de tesis en inteligencia artificial.",
      "dermasure.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura en PHP y MySQL, incluyendo la capa de inferencia desacoplada para integrar el modelo de IA real sin modificar el resto del sistema.",
      "dermasure.f1": "Carga y validación automática de imágenes dermatoscópicas (formato, peso y dimensiones) antes de procesarlas.",
      "dermasure.f2": "Estimación de incertidumbre mediante Monte Carlo Dropout (20 pasadas por análisis) y calibración de confianza (Temperature Scaling).",
      "dermasure.f3": "Clasificación automática del resultado por nivel de confiabilidad (alta, media, baja) con recomendación textual asociada.",
      "dermasure.f4": "Historial de análisis por paciente con línea de tiempo y visor de imágenes ampliadas.",
      "dermasure.f5": "Dashboard con indicadores de investigación: tiempo de diagnóstico, cobertura geográfica y detección en estadio temprano.",
      "dermasure.f6": "Arquitectura de inferencia desacoplada, preparada para conectar el modelo de IA real sin modificar el resto del sistema.",

      "asistenciax.metaDesc": "Sistema de control de asistencia laboral.",
      "asistenciax.summary": "Sistema de control de asistencia laboral para gestionar horarios, descansos y reglas de negocio configurables por área y empleado.",
      "asistenciax.role": "Desarrollador full stack del proyecto (backend y frontend). Diseñé la arquitectura en PHP, el modelo de datos en MySQL y el motor de reglas de horarios, breaks y asistencia por área.",
      "asistenciax.f1": "Configuración de horarios y breaks por área, con validación de duración mínima y separación entre turnos.",
      "asistenciax.f2": "Registro de entrada y salida con tolerancia configurable y cierre automático del horario tras el tiempo permitido.",
      "asistenciax.f3": "Motor de acciones pendientes: el sistema determina en tiempo real la única acción disponible para el empleado (entrada, break, regreso o salida).",
      "asistenciax.f4": "Bloqueo de salida cuando existe un break pendiente sin resolver, evitando registros inconsistentes.",
      "asistenciax.f5": "Reglas de negocio personalizables por área (tolerancia de entrada, cierre de horario, separación mínima entre breaks).",
      "asistenciax.f6": "Dashboard con resumen del estado del personal y reportes de asistencia por usuario o de forma general."
    },
    en: {
      "nav.inicio": "Home", "nav.proyectos": "Projects", "nav.educacion": "Education", "nav.contacto": "Contact",
      "common.verDetalle": "View details", "common.volver": "Back to projects", "common.rol": "My role",
      "common.funcionalidades": "Key features", "common.capturas": "System screenshots",
      "common.notaPrivado": "Source code private under a confidentiality agreement with the client.",
      "common.cerrar": "Close", "common.anterior": "Previous", "common.siguiente": "Next",
      "common.copiarDiscord": "Copy Discord username", "common.temaAria": "Toggle color theme",
      "common.idiomaAria": "Switch language", "common.verCodigo": "View code on GitHub →",

      "home.title": "Deivy Torres | Software Architect",
      "home.metaDesc": "Portfolio of Deivy Torres, software architect.",
      "home.status": "Available for new projects", "home.rol": "Systems Engineer",
      "home.desc": "Does your business need to automate processes or go digital? I design a solution tailored to you, built to save you time and money and help you win more clients.",
      "home.cta": "View projects",
      "home.edureg.desc": "School management system with enrollment, installment payments and a financial control dashboard.",
      "home.secondbrain.desc": "A Personal knowledge manager with Markdown notes, topics and productivity analytics.",
      "home.plangym.desc": "Gym membership management system with member control, payments and QR-based attendance.",
      "home.helpdesk.desc": "A Technical support ticketing platform with roles, audit trail and and comprehensive performance reports.",
      "home.preguntario.desc": "Survey system with questionnaire creation, assignment to respondents and automatic results.",
      "home.agendatucita.desc": "Medical appointment system with automatic schedule generation and real-time confirmation.",
      "home.dermasure.desc": "AI-assisted diagnostic support for Basal Cell Carcinoma detection, with uncertainty estimation.",
      "home.asistenciax.desc": "Work attendance control with schedules, breaks and automatic rules per area.",
      "home.edu.carrera": "Systems Engineering", "home.edu.universidad": "Universidad Privada San Juan Bautista",

      "edureg.metaDesc": "School management system.",
      "edureg.summary": "School management system to handle enrollment, payments and academic organization for an educational institution, with real-time financial control.",
      "edureg.role": "Full stack developer on the project (backend and frontend). I designed the Laravel architecture, the data model, and the enrollment, payment and debt-control logic, with a Tailwind interface.",
      "edureg.f1": "Academic management of students, guardians, school years, grades, classrooms and sections.",
      "edureg.f2": "Enrollment process with available-slot validation and blocking of duplicate enrollments per year.",
      "edureg.f3": "Automatic generation of monthly installments with due dates when a student enrolls.",
      "edureg.f4": "Payment recording that blocks out-of-sequence installments, with audited voiding by reason.",
      "edureg.f5": "Automatic detection of debt and overdue payments based on each installment's due date.",
      "edureg.f6": "Dashboard with metrics on active enrollment, accumulated debt and school-year billing.",

      "secondbrain.metaDesc": "Personal desktop knowledge manager.",
      "secondbrain.summary": "Desktop app to capture notes, ideas and images, organize them by topic, and analyze your own workflow with productivity metrics.",
      "secondbrain.role": "Full stack developer on the project (backend and frontend). I designed the backend's layered architecture, the data model and use cases, plus the desktop interface and communication between modules.",
      "secondbrain.f1": "Markdown note editor with live preview, to capture ideas without losing formatting.",
      "secondbrain.f2": "Per-note built-in timer that tracks time spent on each idea or piece of research.",
      "secondbrain.f3": "Knowledge organization by topics and categories, grouping notes and images hierarchically.",
      "secondbrain.f4": "Personal analytics panel with productivity metrics: time invested, words written, work sessions and lexical diversity.",
      "secondbrain.f5": "Layered (Clean Architecture) design with event-based communication between modules, built to stay easy to scale and modify.",

      "plangym.metaDesc": "Gym membership management system.",
      "plangym.summary": "Web-based membership system for gyms, with member, plan, payment and attendance control, custom-built to the client's requirements.",
      "plangym.role": "Full stack developer on the project (backend and frontend). I designed the MVC architecture in PHP, the MySQL data model, and the business rules for memberships, payments and attendance.",
      "plangym.f1": "Role-based access control (superadmin, admin, receptionist), each with distinct permissions and views.",
      "plangym.f2": "Management of members, plans and memberships, with duplicate validation, expirations and active/finished/cancelled states.",
      "plangym.f3": "Payment recording with multiple methods, audited cancellation by reason, and payment replacement without losing history.",
      "plangym.f4": "Attendance control via a unique QR code per member, validating active membership and payment before allowing entry.",
      "plangym.f5": "Automatic upcoming-expiration notifications with a real-time alert counter.",
      "plangym.f6": "Dashboard with monthly revenue metrics, most popular plan and most-used payment method.",
      "plangym.f7": "Payment and membership reports filterable by month, year and status.",

      "helpdesk.metaDesc": "Technical support ticketing platform.",
      "helpdesk.summary": "Web platform for technical support tickets and incidents, with differentiated roles for requesters, technicians, supervisors and administrators.",
      "helpdesk.role": "Full stack developer on the project (backend and frontend). I designed the MVC architecture in PHP, the MySQL data model, and the permission rules, ticket lifecycle and reports.",
      "helpdesk.f1": "Access control across 4 roles (superadmin, supervisor, technician, requester), each with their own permissions and views.",
      "helpdesk.f2": "Ticket inbox with role-based visibility: each user only sees what they're meant to create, handle or supervise.",
      "helpdesk.f3": "Controlled ticket lifecycle (open → in progress → closed), disallowing rollbacks or status skips.",
      "helpdesk.f4": "Public and internal comments, with different visibility rules for requesters and technicians.",
      "helpdesk.f5": "Technician assignment with business rules preventing reassignment of an already-handled ticket.",
      "helpdesk.f6": "Management of users, areas and categories with soft deletion and record restoration.",
      "helpdesk.f7": "Dashboard and reports with response-time metrics, filterable by technician, category and period.",

      "preguntario.metaDesc": "Survey management system.",
      "preguntario.summary": "Survey system to build questionnaires with different question types, assign them to respondents, and view automatic results and statistics per question.",
      "preguntario.role": "Full stack developer on the project (backend and frontend). I designed the MVC architecture in PHP, the MySQL data model, and the assignment, response and results-calculation logic.",
      "preguntario.f1": "Questionnaire builder with 6 question types (single choice, multiple choice, Likert, numeric, boolean and free text).",
      "preguntario.f2": "Assignment of surveys to specific respondents, with pending/completed status tracking per person.",
      "preguntario.f3": "Validation of required questions and duplicate-response control before accepting a submission.",
      "preguntario.f4": "Automatic results calculation: per-option counts, averages and completion percentage per questionnaire.",
      "preguntario.f5": "Individual results view per respondent and consolidated view per questionnaire, including free-text answers.",
      "preguntario.f6": "Dashboard with completion-rate indicators and the most-used question types.",

      "agendatucita.metaDesc": "Medical appointment system.",
      "agendatucita.summary": "Medical appointment system to manage patients, doctors, specialties, schedules and bookings for a clinic or practice, with automatic availability generation.",
      "agendatucita.role": "Full stack developer on the project (backend and frontend). I designed the MVC architecture in PHP, the MySQL data model, and the logic for schedule generation, appointment booking and notifications.",
      "agendatucita.f1": "Access control across 3 roles (admin, receptionist, doctor), each with their own workflow.",
      "agendatucita.f2": "Automatic generation of appointment slots based on the doctor's schedule and the duration configured per specialty.",
      "agendatucita.f3": "Full booking flow: patient lookup by ID, specialty selection, doctor and available time slot.",
      "agendatucita.f4": "Appointment management with controlled states (pending, confirmed, cancelled) and confirmation exclusive to the doctor.",
      "agendatucita.f5": "Medical history lookup by patient ID, viewable from both the patient's and the doctor's perspective.",
      "agendatucita.f6": "Real-time notifications on appointment creation, confirmation or cancellation.",

      "dermasure.metaDesc": "AI-assisted dermatological diagnosis support.",
      "dermasure.summary": "Preliminary diagnostic support system for Basal Cell Carcinoma detection through dermatoscopic image analysis, developed to support an AI thesis project.",
      "dermasure.role": "Full stack developer on the project (backend and frontend). I designed the PHP and MySQL architecture, including a decoupled inference layer to plug in the real AI model without modifying the rest of the system.",
      "dermasure.f1": "Automatic upload and validation of dermatoscopic images (format, size and dimensions) before processing.",
      "dermasure.f2": "Uncertainty estimation via Monte Carlo Dropout (20 passes per analysis) and confidence calibration (Temperature Scaling).",
      "dermasure.f3": "Automatic classification of the result by reliability level (high, medium, low) with an associated text recommendation.",
      "dermasure.f4": "Per-patient analysis history with a timeline and an enlarged image viewer.",
      "dermasure.f5": "Dashboard with research indicators: diagnosis time, geographic coverage and early-stage detection.",
      "dermasure.f6": "Decoupled inference architecture, ready to connect the real AI model without modifying the rest of the system.",

      "asistenciax.metaDesc": "Work attendance control system.",
      "asistenciax.summary": "Work attendance control system to manage schedules, breaks and configurable business rules per area and employee.",
      "asistenciax.role": "Full stack developer on the project (backend and frontend). I designed the PHP architecture, the MySQL data model, and the rules engine for schedules, breaks and attendance per area.",
      "asistenciax.f1": "Schedule and break configuration per area, with minimum-duration validation and separation between shifts.",
      "asistenciax.f2": "Clock-in/clock-out recording with configurable tolerance and automatic schedule closure after the allowed time.",
      "asistenciax.f3": "Pending-action engine: the system determines in real time the single action available to the employee (clock in, break, return or clock out).",
      "asistenciax.f4": "Blocks clock-out when there's an unresolved pending break, preventing inconsistent records.",
      "asistenciax.f5": "Customizable business rules per area (entry tolerance, schedule closure, minimum separation between breaks).",
      "asistenciax.f6": "Dashboard with staff status summary and attendance reports per user or overall."
    }
  };

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      let key = el.getAttribute('data-i18n');
      let text = (translations[lang] && translations[lang][key]) || translations.es[key];
      if (!text) return;
      let attr = el.getAttribute('data-i18n-attr');
      if (attr) el.setAttribute(attr, text);
      else el.textContent = text;
    });
    let indicator = document.querySelector('.lang-code');
    if (indicator) indicator.textContent = lang.toUpperCase();
    document.documentElement.setAttribute('lang', lang);
  }

  let langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function (e) {
      e.preventDefault();
      let next = (localStorage.getItem('site-lang') || 'es') === 'es' ? 'en' : 'es';
      localStorage.setItem('site-lang', next);
      applyTranslations(next);
    });
  }
  applyTranslations(localStorage.getItem('site-lang') || 'es');


  let themeToggle = document.getElementById('theme-toggle');
  function setThemeIcon(theme) {
    let icon = themeToggle && themeToggle.querySelector('i');
    if (!icon) return;
    icon.classList.toggle('fi-rr-moon', theme !== 'light');
    icon.classList.toggle('fi-rr-sun', theme === 'light');
  }
  if (themeToggle) {
    setThemeIcon(localStorage.getItem('site-theme') || 'dark');
    themeToggle.addEventListener('click', function (e) {
      e.preventDefault();
      let isLight = document.documentElement.getAttribute('data-theme') === 'light';
      let next = isLight ? 'dark' : 'light';
      if (next === 'light') document.documentElement.setAttribute('data-theme', 'light');
      else document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('site-theme', next);
      setThemeIcon(next);
    });
  }
})();
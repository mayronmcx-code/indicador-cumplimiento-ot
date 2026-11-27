/* =====================================================
   TESALIA CBC - INGENIERÍA MACHACHI
   INDICADOR GENERAL DE CUMPLIMIENTO DE OT
   CONFIGURACIÓN GENERAL - VERSIÓN 1.2
===================================================== */

const CONFIG = {

    version: "1.4",

    empresa: "TESALIA CBC",

    planta: "Ingeniería Machachi",

    titulo: "Indicador General de Cumplimiento de OT",

    idioma: "es-EC",

    /* METAS DE CUMPLIMIENTO */

    metas: {

        cumplimientoAlto: 90,

        cumplimientoMedio: 80,

        cierreTecnico: 90

    },

    /* COLORES CORPORATIVOS */

    colores: {

        azulOscuro: "#0b2c50",

        azul: "#005baa",

        cerradas: "#16834b",

        ejecutadas: "#16834b",

        sinCierre: "#d99a08",

        parciales: "#ea580c",

        noEjecutadas: "#d32f2f",

        asignacionIncorrecta: "#b91c1c",

        cierreTecnico: "#0284c7",

        meta: "#64748b",

        gris: "#94a3b8"

    },

    /* PUESTOS DE TRABAJO SAP */

    puestosTrabajo: {

        "E_AUT 00": {
            nombre: "Técnico Autómata",
            especialidad: "Automatización",
            generico: true,
            excluir: false
        },

        "E_AUT 01": {
            nombre: "Luis Andrango",
            especialidad: "Automatización",
            excluir: false
        },

        "E_AUT 02": {
            nombre: "Leonardo Narvaez",
            especialidad: "Automatización",
            excluir: false
        },

        "E_ELE 00": {
            nombre: "Técnico Eléctrico",
            especialidad: "Electricidad",
            generico: true,
            excluir: false
        },

        "E_ELE 01": {
            nombre: "Junior Anchundia",
            especialidad: "Electricidad",
            excluir: false
        },

        "E_ELE 02": {
            nombre: "Nixon Martinez",
            especialidad: "Electricidad",
            excluir: false
        },

        "E_ELE 03": {
            nombre: "Jorge Guerrero",
            especialidad: "Electricidad",
            excluir: false
        },

        "E_ELE 04": {
            nombre: "William Viracucha",
            especialidad: "Electricidad",
            excluir: false
        },

        "E_ELE 05": {
            nombre: "Mauricio Cumbajin",
            especialidad: "Electricidad",
            excluir: false
        },

        "E_IEF 00": {
            nombre: "Auxiliar de Infraestructura",
            especialidad: "Infraestructura",
            generico: true,
            excluir: false
        },

        "E_IEF 01": {
            nombre: "Pablo Chango",
            especialidad: "Infraestructura",
            excluir: false
        },

        "E_IEF 02": {
            nombre: "Jorge Suntaxi",
            especialidad: "Infraestructura",
            excluir: false
        },

        "E_IEF 03": {
            nombre: "Asignación de Técnico Incorrecta",
            especialidad: "Infraestructura",
            excluir: true
        },

        "E_INS 01": {
            nombre: "Gerardo Salar",
            especialidad: "Instrumentación",
            excluir: false
        },

        "E_MEC 00": {
            nombre: "Técnico Mecánico",
            especialidad: "Mecánica",
            generico: true,
            excluir: false
        },

        "E_MEC 01": {
            nombre: "Jaime Caiza",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_MEC 02": {
            nombre: "Jorge Cajas",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_MEC 03": {
            nombre: "Darwin Ñacato",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_MEC 04": {
            nombre: "Juan Puco",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_MEC 05": {
            nombre: "Asignación de Técnico Incorrecta",
            especialidad: "Mecánica",
            excluir: true
        },

        "E_MEC 06": {
            nombre: "Joel Caiza",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_MEC 07": {
            nombre: "Juan Jacome",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_MEC 08": {
            nombre: "Angel Caiza",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_MEC 09": {
            nombre: "Walter Paucar",
            especialidad: "Mecánica",
            excluir: false
        },

        "E_OPE 00": {
            nombre: "Operador",
            especialidad: "Operación",
            generico: true,
            excluir: false
        },

        "E_SOP 03": {
            nombre: "Javier Casa",
            especialidad: "Soplado",
            excluir: false
        }

    },

    /* CLASES DE ORDEN SAP */

    clasesOrden: {

        "ZM01": {
            nombre: "Orden de Mantenimiento Preventivo",
            corto: "Preventivo",
            incluir: true
        },

        "ZM02": {
            nombre: "Orden de Mantenimiento Correctivo",
            corto: "Correctivo",
            incluir: true
        },

        "ZM03": {
            nombre: "Orden de Calibración",
            corto: "Calibración",
            incluir: true
        },

        "ZM06": {
            nombre: "Orden de Saneamiento",
            corto: "Saneamiento",
            incluir: true
        }

    },

    /* ESTADOS DEL SISTEMA SAP */

    estadosSAP: {

        "NOTI": "Notificada sin cierre técnico",

        "NOTP": "No ejecutada / Notificación parcial",

        "CTEC": "Cierre técnico",

        "IMPR": "Orden impresa",

        "JBFI": "Pendiente",

        "LIB.": "Orden liberada",

        "RESA": "Pendiente",

        "SOPN": "Pendiente",

        "SONP": "Pendiente"

    },

    /* CLASIFICACIONES DEL INDICADOR */

    clasificaciones: {

        cerradas: {

            nombre: "Ejecutada y cerrada",

            ejecutada: true,

            cerrada: true,

            clase: "estado-cerrada"

        },

        sinCierre: {

            nombre: "Faltante de cierre técnico",

            ejecutada: true,

            cerrada: false,

            clase: "estado-sin-cierre"

        },

        parciales: {

            nombre: "No ejecutada / Notificación parcial",

            ejecutada: false,

            cerrada: false,

            clase: "estado-parcial"

        },

        noEjecutadas: {

            nombre: "No ejecutada",

            ejecutada: false,

            cerrada: false,

            clase: "estado-no-ejecutada"

        },

        asignacionIncorrecta: {

            nombre: "Asignación de Técnico Incorrecta",

            ejecutada: false,

            cerrada: false,

            clase: "estado-asignacion-incorrecta"

        }

    },

    /* REGLAS DE ASIGNACIÓN */

    reglas: {

        unidadCalculo: "OT",

        priorizarPuestoReal: true,

        utilizarPlanificadoSiRealVacio: true,

        mantenerPuestosGenericos: true,

        mantenerMultiplesTecnicos: true,

        eliminarDuplicadosPorTecnico: true,

        excluirAsignacionesIncorrectas: true,

        puestosExcluidos: [
            "E_IEF 03",
            "E_MEC 05"
        ],

        prioridadEstados: [
            "NOTP",
            "CTEC",
            "NOTI"
        ]

    },

    /* ENCABEZADOS POSIBLES DEL EXCEL IW47 */

    columnas: {

        orden: [
            "Orden",
            "Número de orden",
            "Nº orden",
            "Orden de trabajo"
        ],

        fechaCreacion: [
            "Creado el",
            "Fecha de creación",
            "Fecha de entrega"
        ],

        claseOrden: [
            "Clase de orden",
            "Clase orden"
        ],

        descripcion: [
            "Descripción",
            "Texto breve",
            "Texto breve de orden",
            "Texto breve orden",
            "Descripción de orden",
            "Denominación de orden",
            "Texto de orden",
            "Texto breve operación",
            "Texto breve de operación",
            "Texto operación"
        ],

        ubicacionTecnica: [
            "Ubicación técnica",
            "Ubic. técnica",
            "Ubicac. técnica"
        ],

        puestoPlanificado: [
            "Puesto de trabajo planificado",
            "Puesto trabajo planificado",
            "Puesto planificado",
            "Puesto de trabajo",
            "Pto.tbjo.planificado",
            "Pto.tbjo.planif."
        ],

        puestoReal: [
            "Puesto de trabajo real",
            "Puesto trabajo real",
            "Puesto real",
            "Pto.tbjo.real"
        ],

        estadoSistema: [
            "Estado Sistema",
            "Estado de sistema",
            "Status sistema",
            "Status del sistema"
        ]

    },

    /* MESES DEL AÑO */

    meses: [

        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"

    ]

};


/* =====================================================
   FUNCIONES AUXILIARES
===================================================== */


/* NORMALIZAR TEXTO */

function normalizarTexto(valor) {

    return String(valor ?? "")

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "")

        .replace(/\s+/g, " ")

        .trim()

        .toUpperCase();

}


/* NORMALIZAR PUESTO DE TRABAJO */

function normalizarPuesto(valor) {

    const texto = normalizarTexto(valor);

    const coincidencia = texto.match(
        /^(E_[A-Z]{3})[\s_-]*(\d{1,2})$/
    );

    if (coincidencia) {

        return coincidencia[1] + " " +

            coincidencia[2].padStart(2, "0");

    }

    return texto;

}


/* EXTRAER PUESTOS DE TRABAJO */

function extraerPuestos(valor) {

    const texto = normalizarTexto(valor);

    const coincidencias = texto.match(
        /E_[A-Z]{3}[\s_-]*\d{1,2}\b/g
    ) || [];

    return [...new Set(

        coincidencias.map(normalizarPuesto)

    )];

}


/* OBTENER INFORMACIÓN DEL PUESTO */

function obtenerPuestoTrabajo(codigo) {

    const puesto = normalizarPuesto(codigo);

    return CONFIG.puestosTrabajo[puesto] || {

        nombre: puesto || "Sin asignación",

        especialidad: "Sin clasificar",

        generico: false,

        excluir: false,

        desconocido: true

    };

}


/* OBTENER CLASE DE ORDEN */

function obtenerClaseOrden(codigo) {

    const clase = normalizarTexto(codigo);

    return CONFIG.clasesOrden[clase] || {

        nombre: clase || "Sin clasificación",

        corto: clase || "Sin clasificación",

        incluir: false

    };

}


/* VALIDAR CLASE DE ORDEN */

function claseOrdenValida(codigo) {

    return obtenerClaseOrden(codigo).incluir === true;

}


/* VALIDAR ASIGNACIÓN INCORRECTA */

function esAsignacionIncorrecta(puestos) {

    const lista = Array.isArray(puestos)

        ? puestos

        : extraerPuestos(puestos);

    return lista.some(puesto =>

        CONFIG.reglas.puestosExcluidos.includes(

            normalizarPuesto(puesto)

        )

    );

}


/* EXTRAER ESTADOS SAP */

function extraerEstados(valor) {

    const valores = Array.isArray(valor)

        ? valor

        : [valor];

    const texto = normalizarTexto(

        valores.join(" ")

    );

    return [...new Set(

        texto.match(/[A-Z]{3,5}\.?/g) || []

    )];

}


/* CLASIFICAR ESTADO DE UNA OT */

function clasificarEstadoSAP(estadoSistema) {

    const estados = extraerEstados(estadoSistema);

    // NOTP TIENE PRIORIDAD SOBRE CTEC Y NOTI.

    if (estados.includes("NOTP")) {

        return "parciales";

    }

    // ORDEN EJECUTADA Y CERRADA.

    if (estados.includes("CTEC")) {

        return "cerradas";

    }

    // ORDEN EJECUTADA SIN CIERRE TÉCNICO.

    if (estados.includes("NOTI")) {

        return "sinCierre";

    }

    // RESTO DE ESTADOS.

    return "noEjecutadas";

}


/* OBTENER PUESTOS RESPONSABLES */

function obtenerPuestosResponsables(
    puestoReal,
    puestoPlanificado
) {

    const reales = extraerPuestos(puestoReal);

    const planificados = extraerPuestos(
        puestoPlanificado
    );

    // NO ELIMINAR PUESTOS GENÉRICOS.
    // NO REASIGNAR TÉCNICOS.
    // CONSERVAR LA ASIGNACIÓN SAP.

    if (String(puestoReal ?? "").trim() !== "") {

        return reales.length

            ? reales

            : [normalizarPuesto(puestoReal)];

    }

    if (planificados.length > 0) {

        return planificados;

    }

    return String(puestoPlanificado ?? "").trim()

        ? [normalizarPuesto(puestoPlanificado)]

        : [];

}


/* CALCULAR PORCENTAJE */

function calcularPorcentaje(numerador, denominador) {

    if (denominador <= 0) {

        return null;

    }

    return (numerador / denominador) * 100;

}


/* FORMATO NUMÉRICO */

function formatoNumero(valor) {

    return new Intl.NumberFormat("es-EC", {

        maximumFractionDigits: 0

    }).format(valor ?? 0);

}


/* FORMATO DE PORCENTAJE */

function formatoPorcentaje(valor) {

    if (valor === null || !Number.isFinite(valor)) {

        return "N/A";

    }

    return new Intl.NumberFormat("es-EC", {

        minimumFractionDigits: 1,

        maximumFractionDigits: 1

    }).format(valor) + "%";

}


/* SEMÁFORO DE CUMPLIMIENTO */

function obtenerSemaforo(porcentaje) {

    if (porcentaje === null ||
        !Number.isFinite(porcentaje)) {

        return {

            clase: "",

            barra: "",

            color: CONFIG.colores.gris

        };

    }

    if (porcentaje >= CONFIG.metas.cumplimientoAlto) {

        return {

            clase: "cumplimiento-alto",

            barra: "progress-green",

            color: CONFIG.colores.cerradas

        };

    }

    if (porcentaje >= CONFIG.metas.cumplimientoMedio) {

        return {

            clase: "cumplimiento-medio",

            barra: "progress-yellow",

            color: CONFIG.colores.sinCierre

        };

    }

    return {

        clase: "cumplimiento-bajo",

        barra: "progress-red",

        color: CONFIG.colores.noEjecutadas

    };

}


/* FIN DE LA CONFIGURACIÓN */

// =====================================================
// CORRECCIÓN DE ENCABEZADOS REALES SAP IW47
// =====================================================

CONFIG.columnas.puestoPlanificado.unshift(
    "Pto.trab.(plan)"
);

CONFIG.columnas.puestoReal.unshift(
    "Pto.trab.(real)"
);

CONFIG.columnas.ubicacionTecnica.unshift(
    "Ubicac.técnica"
);

CONFIG.columnas.claseOrden.unshift(
    "Clase orden"
);

CONFIG.columnas.descripcion.unshift(
    "Texto notific."
);

CONFIG.columnas.estadoSistema.unshift(
    "Estado sistema"
);

CONFIG.columnas.fechaCreacion.unshift(
    "Creado el"
);

// FIN DE LA CORRECCIÓN


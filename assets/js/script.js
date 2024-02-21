document.write('<h1>Estadisticas centro medico ñuñoa</h1>');

const radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

const traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

const dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];




// Desafío 1: Agregar nuevas horas al arreglo de Traumatología
const nuevasConsultasTraumatologia = [
    { hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' },
];

traumatologia.push(...nuevasConsultasTraumatologia);

// Desafío 2: Eliminar el primer y último elemento del arreglo de Radiología
const radiologiaSinExtremos = radiologia.slice(1, radiologia.length - 1);

// Desafío 3: Imprimir la lista de consultas médicas de Dental en la página HTML
function imprimirConsultas(consultas, titulo) {
    document.write(`<h3>${titulo}:</h3>`);

    for (let i = 0; i < consultas.length; i++) {
        const consulta = consultas[i];
        const infoConsulta = `${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}`;
        document.write(`<p>${infoConsulta}</p>`);
    }
}

imprimirConsultas(dental, 'Consultas médicas de Dental');

// Desafío 4: Imprimir un listado total de todos los pacientes que se atendieron en el centro médico
function imprimirListadoPacientes(consultas) {

    const pacientes = consultas.map(consulta => consulta.paciente);
    const listadoPacientes = pacientes.join('<br>');

    document.write(`<p>${listadoPacientes}</p>`);
}

document.write('<h3>Listado total de pacientes atendidos en el centro:</h3>');
imprimirListadoPacientes([...radiologia, ...traumatologia, ...dental]);

// Desafío 5 & 6: Filtrar pacientes de ISAPRE en la lista de consultas médicas de Dental
// y Filtrar pacientes de FONASA en la lista de consultas médicas de Traumatología

// Función para filtrar pacientes por previsión
function filtrarPorPrevision(consultas, prevision) {
    return consultas.filter(consulta => consulta.prevision === prevision);
}

// Llamadas a la función y escritura en el documento
const pacientesIsapreDental = filtrarPorPrevision(dental, 'ISAPRE');
document.write(`<h3>Paciente(s) ISAPRE en la lista de consultas médicas de Dental</h3>`);
imprimirListadoPacientes(pacientesIsapreDental);

const pacientesFonasaTraumatologia = filtrarPorPrevision(traumatologia, 'FONASA');
document.write(`<h3>Paciente(s) FONASA en la lista de consultas médicas de Traumatología</h3>`);
imprimirListadoPacientes(pacientesFonasaTraumatologia);


document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);

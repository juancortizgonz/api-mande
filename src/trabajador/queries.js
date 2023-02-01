const getTrabajadores = 'SELECT * FROM "Trabajador"';
const getTrabajadorById = 'SELECT * FROM "Trabajador" WHERE id_trabajador = $1';
const checkCedulaExists = 'SELECT t FROM "Trabajador" t WHERE t.cedula = $1';
const addTrabajador = 'INSERT INTO "Trabajador" (foto, cedula, soporte_cedula, lat_dir, lon_dir, id_usuario) VALUES ($1, $2, $3, $4, $5, $6)';
const deleteTrabajador = 'DELETE FROM "Trabajador" WHERE id_trabajador = $1';
const displayTrabajadores = "SELECT * FROM display_trabajadores";

module.exports = {
    getTrabajadores,
    getTrabajadorById,
    checkCedulaExists,
    addTrabajador,
    deleteTrabajador,
    displayTrabajadores,
};
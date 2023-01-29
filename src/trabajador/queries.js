const getTrabajadores = "SELECT * FROM trabajador";
const getTrabajadorById = "SELECT * FROM trabajador WHERE id_trabajador = $1";
const checkUsuarioExists = "SELECT t FROM trabajador t WHERE t.id_usuario = $1";
const addTrabajador = "INSERT INTO trabajador (id_usuario, foto) VALUES ($1, $2)";
const deleteTrabajador = "DELETE FROM trabajador WHERE id_trabajador = $1";
const updateTrabajador = "UPDATE trabajador SET foto = $1 WHERE id_trabajador = $2";

module.exports = {
    getTrabajadores,
    getTrabajadorById,
    checkUsuarioExists,
    addTrabajador,
    deleteTrabajador,
    updateTrabajador,
};
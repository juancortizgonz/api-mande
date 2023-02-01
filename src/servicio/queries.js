const getServicios = 'SELECT * FROM "Servicio"';
const getServicioById = 'SELECT * FROM "Servicio" WHERE id_servicio = $1';
const addServicio = 'INSERT INTO "Servicio" (costo, calificacion, fecha, pagada, id_oferta) VALUES ($1, $2, $3, $4, $5)';
const deleteServicio = 'DELETE FROM "Servicio" WHERE id_servicio = $1';
const updateServicio = 'UPDATE "Servicio" SET calificacion = $1, pagada = $2';

module.exports = {
    getServicios,
    getServicioById,
    addServicio,
    deleteServicio,
    updateServicio,
};
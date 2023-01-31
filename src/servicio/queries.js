const getServicios = "SELECT * FROM servicio";
const getServicioById = "SELECT * FROM servicio WHERE id_Servicio = $1";
const addServicio = "INSERT INTO servicio (costo_servicio, calificacion_servicio, unidades_servicio, fecha_servicio, estado_servicio, id_oferta) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteServicio = "DELETE FROM servicio WHERE id_servicio = $1";
const updateServicio = "UPDATE servicio SET costo_servicio = $1, calificacion_servicio = $2, unidades_servicio = $3, fecha_servicio = $4, estado_servicio = $5 WHERE id_servicio = $6";

module.exports = {
    getServicios,
    getServicioById,
    addServicio,
    deleteServicio,
    updateServicio
};

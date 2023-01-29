const getLabores = "SELECT * FROM labor";
const getLaborById = "SELECT * FROM labor WHERE id_labor = $1";
const addLabor = "INSERT INTO labor (nombre_labor, descripcion_labor, unidad_labor) VALUES ($1, $2, $3)";
const deleteLabor = "DELETE FROM labor WHERE id_labor = $1";
const updateLabor = "UPDATE labor SET nombre_labor = $1, descripcion_labor = $2, unidad_labor = $3 WHERE id_labor = $4";

module.exports = {
    getLabores,
    getLaborById,
    addLabor,
    deleteLabor,
    updateLabor,
};
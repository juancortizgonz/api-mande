const getLabores = 'SELECT * FROM "Labor"';
const getLaborById = 'SELECT * FROM "Labor" WHERE id_labor = $1';
const addLabor = 'INSERT INTO "Labor" (nombre, descripcion, unidad) VALUES ($1, $2, $3)';
const deleteLabor = 'DELETE FROM "Labor" WHERE id_labor = $1';
const updateLabor = 'UPDATE "Labor" SET nombre = $1, descripcion = $2, unidad = $3 WHERE id_labor = $4';

module.exports = {
    getLabores,
    getLaborById,
    addLabor,
    deleteLabor,
    updateLabor,
};
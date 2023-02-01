const getTarifas = 'SELECT * FROM "Tarifa"';
const getTarifaById = 'SELECT * FROM "Tarifa" WHERE id_tarifa = $1';
const addTarifa = 'INSERT INTO "Tarifa" (precio, id_trabajador, id_labor) VALUES ($1, $2, $3)';
const deleteTarifa = 'DELETE FROM "Tarifa" WHERE id_tarifa = $1';
const updateTarifa = 'UPDATE "Tarifa" SET precio = $1 WHERE id_tarifa = $2';

module.exports = {
    getTarifas,
    getTarifaById,
    addTarifa,
    deleteTarifa,
    updateTarifa,
};
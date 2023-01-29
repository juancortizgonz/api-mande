const getTarifas = "SELECT * FROM tarifa";
const getTarifaById = "SELECT * FROM tarifa WHERE id_tarifa = $1";
const addTarifa = "INSERT INTO tarifa (tarifa, id_trabajador, id_labor) VALUES ($1, $2, $3)";
const deleteTarifa = "DELETE FROM tarifa WHERE id_tarifa = $1";
const updateTarifa = "UPDATE tarifa SET tarifa = $1 WHERE id_tarifa = $2";

module.exports = {
    getTarifas,
    getTarifaById,
    addTarifa,
    deleteTarifa,
    updateTarifa
};

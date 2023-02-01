const getOfertas = 'SELECT * FROM "Oferta"';
const getOfertaById = 'SELECT * FROM "Oferta" WHERE id_oferta = $1';
const addOferta = 'INSERT INTO "Oferta" (id_trabajador, id_labor, id_tarifa) VALUES ($1, $2, $3)';
const deleteOferta = 'DELETE FROM "Oferta" WHERE id_oferta = $1';
const updateOferta = 'UPDATE "Oferta" SET id_trabajador = $1, id_labor = $2, id_tarifa = $3';

module.exports = {
    getOfertas,
    getOfertaById,
    addOferta,
    deleteOferta,
    updateOferta,
};
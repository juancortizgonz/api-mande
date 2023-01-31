const getClientes = 'SELECT * FROM "Cliente"';
const getClienteById = 'SELECT * FROM "Cliente" WHERE id_cliente = $1';
const addCliente = 'INSERT INTO "Cliente" (recibo, lat_dir, lon_dir) VALUES ($1, $2, $3)';
const deleteCliente = 'DELETE FROM "Cliente" WHERE id_cliente = $1';

module.exports = {
    getClientes,
    getClienteById,
    addCliente,
    deleteCliente,
};
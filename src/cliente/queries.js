const getClientes = 'SELECT * FROM "Cliente"';
const getClienteById = 'SELECT * FROM "Cliente" WHERE id_cliente = $1';
const addCliente = 'INSERT INTO "Cliente" (recibo, lat_dir, lon_dir, id_usuario) VALUES ($1, $2, $3, $4)';
const deleteCliente = 'DELETE FROM "Cliente" WHERE id_cliente = $1';
const displayClientes = "SELECT * FROM display_clientes";
const getIdCliente = 'SELECT id_usuario FROM "Usuario" WHERE email=$1';

module.exports = {
    getClientes,
    getClienteById,
    addCliente,
    deleteCliente,
    displayClientes,
    getIdCliente,
};
const getClientes = "SELECT * FROM cliente";
const getClienteById = "SELECT * FROM cliente WHERE id_cliente = $1";
const checkUsuarioExists = "SELECT c FROM cliente c WHERE c.id_usuario = $1";
const addCliente = "INSERT INTO cliente (id_usuario) VALUES ($1)";
const deleteCliente = "DELETE FROM cliente WHERE id_cliente = $1";
const updateCliente = "UPDATE cliente SET id_usuario = $1 WHERE id_cliente = $2";

module.exports = {
    getClientes,
    getClienteById,
    checkUsuarioExists,
    addCliente,
    deleteCliente,
    updateCliente,
};
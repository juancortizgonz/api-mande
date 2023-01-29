const pool = require('../../db');
const queries = require('./queries');


const getClientes = (req, res) => {
    pool.query(queries.getClientes, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getClienteById = (req, res) => {
    const id_cliente = parseInt(req.params.id_cliente);

    pool.query(queries.getClienteById, [id_cliente], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addCliente = (req, res) => {
    const { id_usuario } = req.body;

    pool.query(queries.checkUsuarioExists, [id_usuario], (error, results) => {
        if (results.rows.length) {
            res.send("El usuario ya está asociado con un perfil cliente.");
        }
        pool.query(queries.addCliente, [id_usuario], (error, results) => {
            if (error) throw error;
            res.status(201).send("Nuevo cliente creado.");
        });
    });
};

const deleteCliente = (req, res) => {
    const id_cliente = parseInt(req.params.id_cliente);

    pool.query(queries.getClienteById, [id_cliente], (error, results) => {
        const notFoundCliente = !results.rows.length;
        if (notFoundCliente) {
            res.send("El cliente no existe en la BD.");
        }

        pool.query(queries.deleteCliente, [id_cliente], (error, results) => {
            if (error) throw error;
            res.status(200).send("El cliente se ha eliminado.");
        });
    });
};

const updateCliente = (req, res) => {
    const id_cliente = parseInt(req.params.id_cliente);
    const { id_usuario } = req.body;

    pool.query(queries.getClienteById, [id_cliente], (error, results) => {
        const notFoundCliente = !results.rows.length;
        if (notFoundCliente) {
            res.send("El cliente no existe en la BD.");
        }

        pool.query(queries.updateCliente, [id_usuario, id_cliente], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se han actualizado los datos del cliente.");
        });
    });
};

module.exports = {
    getClientes,
    getClienteById,
    addCliente,
    deleteCliente,
    updateCliente,
};
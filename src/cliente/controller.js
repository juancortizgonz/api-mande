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
    const { recibo, lat_dir, lon_dir, id_usuario } = req.body;

    res.header("Access-Control-Allow-Origin", "*");
    pool.query(queries.addCliente, [recibo, lat_dir, lon_dir, id_usuario], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Nuevo cliente creado.`);
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

module.exports = {
    getClientes,
    getClienteById,
    addCliente,
    deleteCliente,
};
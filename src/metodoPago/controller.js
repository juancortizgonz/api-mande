const pool = require('../../db');
const queries = require('./queries');

const getPaymentById = (req, res) => {
    const id_metodo_pago = parseInt(req.params.id_metodo_pago);

    pool.query(queries.getPaymentById, [id_metodo_pago], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addPayment = (req, res) => {
    const { tipo_tarjeta, numero_tarjeta, id_cliente } = req.body;

    res.header("Access-Control-Allow-Origin", "*");
    pool.query(queries.addPayment, [tipo_tarjeta, numero_tarjeta, id_cliente], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Nuevo metodo de pago creado.`);
    });
};

module.exports = {
    getPaymentById,
    addPayment,
};
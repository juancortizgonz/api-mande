const pool = require('../../db');
const queries = require('./queries');

const getTarifas = (req, res) => {
    pool.query(queries.getTarifas, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTarifaById = (req, res) => {
    const id_tarifa = parseInt(req.params.id_tarifa);

    pool.query(queries.getTarifaById, [id_tarifa], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addTarifa = (req, res) => {
    const { tarifa, id_trabajador, id_labor } = req.body;

    pool.query(queries.addTarifa, [tarifa, id_trabajador, id_labor], (error, results) => {
        if (error) throw error;
        res.status(201).send("Nueva tarifa creada.");
    });
};

const deleteTarifa = (req, res) => {
    const id_tarifa = parseInt(req.params.id_tarifa);

    pool.query(queries.getTarifaById, [id_tarifa], (error, results) => {
        const notFoundTarifa = !results.rows.length;
        if (notFoundTarifa) {
            res.send("La tarifa no existe en la BD.");
        }

        pool.query(queries.deleteTarifa, [id_tarifa], (error, results) => {
            if (error) throw error;
            res.status(200).send("La tarifa se ha eliminado.");
        });
    });
};

const updateTarifa = (req, res) => {
    const id_tarifa = parseInt(req.params.id_tarifa);
    const { tarifa } = req.body;

    pool.query(queries.getTarifaById, [id_tarifa], (error, results) => {
        const notFoundTarifa = !results.rows.length;
        if (notFoundTarifa) {
            res.send("La tarifa no existe en la BD.");
        }

        pool.query(queries.updateTarifa, [tarifa, id_tarifa], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se han actualizado los datos de la tarifa.");
        });
    });
};

module.exports = {
    getTarifas,
    getTarifaById,
    addTarifa,
    deleteTarifa,
    updateTarifa,
};
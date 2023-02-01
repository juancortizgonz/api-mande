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
    const { precio, id_trabajador, id_labor } = req.body;

    res.header("Access-Control-Allow-Origin", "*");

    pool.query(queries.addTarifa, [precio, id_trabajador, id_labor], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Nueva tarifa creada.`);
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
    const { precio, id_trabajador, id_labor } = req.body;

    pool.query(queries.getTarifaById, [id_tarifa], (error, results) => {
        const notFoundTarifa = !results.rows.length;
        if (notFoundTarifa) {
            res.send("La tarifa no existe en la BD.");
        }

        pool.query(queries.updateTarifa, [precio, id_trabajador, id_labor], (error, results) => {
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
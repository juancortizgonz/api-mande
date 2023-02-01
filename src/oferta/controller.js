const pool = require('../../db');
const queries = require('./queries');


const getOfertas = (req, res) => {
    pool.query(queries.getOfertas, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getOfertaById = (req, res) => {
    const id_oferta = parseInt(req.params.id_oferta);

    pool.query(queries.getOfertaById, [id_oferta], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addOferta = (req, res) => {
    const { id_trabajador, id_labor, id_tarifa } = req.body;

    res.header("Access-Control-Allow-Origin", "*");

    pool.query(queries.addOferta, [id_trabajador, id_labor, id_tarifa], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Nueva oferta creada.`);
    });
};

const deleteOferta = (req, res) => {
    const id_oferta = parseInt(req.params.id_oferta);

    pool.query(queries.getOfertaById, [id_oferta], (error, results) => {
        const notFoundOferta = !results.rows.length;
        if (notFoundOferta) {
            res.send("La oferta no existe en la BD.");
        }

        pool.query(queries.deleteOferta, [id_oferta], (error, results) => {
            if (error) throw error;
            res.status(200).send("La oferta se ha eliminado.");
        });
    });
};

const updateOferta = (req, res) => {
    const id_oferta = parseInt(req.params.id_oferta);
    const { id_trabajador, id_labor, id_tarifa } = req.body;

    pool.query(queries.getOfertaById, [id_oferta], (error, results) => {
        const notFoundOferta = !results.rows.length;
        if (notFoundOferta) {
            res.send("La oferta no existe en la BD.");
        }

        pool.query(queries.updateServicio, [id_trabajador, id_labor, id_tarifa], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se han actualizado los datos de la oferta.");
        });
    });
};

module.exports = {
    getOfertas,
    getOfertaById,
    addOferta,
    deleteOferta,
    updateOferta,
};
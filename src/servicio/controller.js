const pool = require('../../db');
const queries = require('./queries');


const getServicios = (req, res) => {
    pool.query(queries.getServicios, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getServicioById = (req, res) => {
    const id_servicio = parseInt(req.params.id_servicio);

    pool.query(queries.getServicioById, [id_servicio], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addServicio = (req, res) => {
    const { costo, calificacion, fecha, pagada, id_oferta } = req.body;

    res.header("Access-Control-Allow-Origin", "*");

    pool.query(queries.addServicio, [costo, calificacion, fecha, pagada, id_oferta], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Nuevo servicio creada.`);
    });
};

const deleteServicio = (req, res) => {
    const id_servicio = parseInt(req.params.id_servicio);

    pool.query(queries.getServicioById, [id_servicio], (error, results) => {
        const notFoundServicio = !results.rows.length;
        if (notFoundServicio) {
            res.send("El servicio no existe en la BD.");
        }

        pool.query(queries.deleteServicio, [id_servicio], (error, results) => {
            if (error) throw error;
            res.status(200).send("El servicio se ha eliminado.");
        });
    });
};

const updateServicio = (req, res) => {
    const id_servicio = parseInt(req.params.id_servicio);
    const { costo, calificacion, fecha, pagada, id_oferta } = req.body;

    pool.query(queries.getServicioById, [id_servicio], (error, results) => {
        const notFoundServicio = !results.rows.length;
        if (notFoundServicio) {
            res.send("El servicio no existe en la BD.");
        }

        pool.query(queries.updateServicio, [costo, calificacion, fecha, pagada, id_oferta], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se han actualizado los datos del servicio.");
        });
    });
};

module.exports = {
    getServicios,
    getServicioById,
    addServicio,
    deleteServicio,
    updateServicio,
};
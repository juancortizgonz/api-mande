const pool = require('../../db');
const queries = require('./queries');


const getTrabajadores = (req, res) => {
    pool.query(queries.getTrabajadores, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTrabajadorById = (req, res) => {
    const id_trabajador = parseInt(req.params.id_trabajador);

    pool.query(queries.getTrabajadorById, [id_trabajador], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addTrabajador = (req, res) => {
    const { id_usuario, foto } = req.body;

    pool.query(queries.checkUsuarioExists, [id_usuario], (error, results) => {
        if (results.rows.length) {
            res.send("El usuario ya está asociado con un perfil trabajador.");
        }
        pool.query(queries.addTrabajador, [id_usuario, foto], (error, results) => {
            if (error) throw error;
            res.status(201).send("Nuevo trabajador creado.");
        });
    });
};

const deleteTrabajador = (req, res) => {
    const id_trabajador = parseInt(req.params.id_trabajador);

    pool.query(queries.getTrabajadorById, [id_trabajador], (error, results) => {
        const notFoundTrabajador = !results.rows.length;
        if (notFoundTrabajador) {
            res.send("El trabajador no existe en la BD.");
        }

        pool.query(queries.deleteTrabajador, [id_trabajador], (error, results) => {
            if (error) throw error;
            res.status(200).send("El trabajador se ha eliminado.");
        });
    });
};

const updateTrabajador = (req, res) => {
    const id_trabajador = parseInt(req.params.id_trabajador);
    const { foto } = req.body;

    pool.query(queries.getTrabajadorById, [id_trabajador], (error, results) => {
        const notFoundTrabajador = !results.rows.length;
        if (notFoundTrabajador) {
            res.send("El trabajador no existe en la BD.");
        }

        pool.query(queries.updateTrabajador, [foto, id_trabajador], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se han actualizado los datos del trabajador.");
        });
    });
};

module.exports = {
    getTrabajadores,
    getTrabajadorById,
    addTrabajador,
    deleteTrabajador,
    updateTrabajador,
};
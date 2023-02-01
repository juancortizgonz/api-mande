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
    const { foto, cedula, soporte_cedula, lat_dir, lon_dir, id_usuario } = req.body;

    res.header("Access-Control-Allow-Origin", "*");

    // Revisar si el correo ya existe
    pool.query(queries.checkCedulaExists, [cedula], (error, results) => {
        if (results.rows.length) {
            res.send("La cedula ya se encuentra registrada.");
        }

        // Agregar el usuario a la BD
        pool.query(queries.addTrabajador, [foto, cedula, soporte_cedula, lat_dir, lon_dir, id_usuario], (error, results) => {
            if (error) throw error;
            res.status(201).send(`Nuevo trabajador creado.`);
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
const displayTrabajadores = (req, res) => {
    pool.query(queries.displayTrabajadores, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getTrabajadores,
    getTrabajadorById,
    addTrabajador,
    deleteTrabajador,
    displayTrabajadores,
};
const pool = require('../../db');
const queries = require('./queries');


const getLabores = (req, res) => {
    pool.query(queries.getLabores, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getLaborById = (req, res) => {
    const id_labor = parseInt(req.params.id_labor);

    pool.query(queries.getLaborById, [id_labor], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addLabor = (req, res) => {
    const { nombre, descripcion, unidad } = req.body;

    res.header("Access-Control-Allow-Origin", "*");

    pool.query(queries.addLabor, [nombre, descripcion, unidad], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Nueva labor creada.`);
    });
};

const deleteLabor = (req, res) => {
    const id_labor = parseInt(req.params.id_labor);

    pool.query(queries.getLaborById, [id_labor], (error, results) => {
        const notFoundLabor = !results.rows.length;
        if (notFoundLabor) {
            res.send("La labor no existe en la BD.");
        }

        pool.query(queries.deleteLabor, [id_labor], (error, results) => {
            if (error) throw error;
            res.status(200).send("La labor se ha eliminado.");
        });
    });
};

const updateLabor = (req, res) => {
    const id_labor = parseInt(req.params.id_labor);
    const { nombre, descripcion, unidad } = req.body;

    pool.query(queries.getLaborById, [id_labor], (error, results) => {
        const notFoundLabor = !results.rows.length;
        if (notFoundLabor) {
            res.send("La labor no existe en la BD.");
        }

        pool.query(queries.updateLabor, [nombre, descripcion, unidad, id_labor], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se han actualizado los datos de la labor.");
        });
    });
};

module.exports = {
    getLabores,
    getLaborById,
    addLabor,
    deleteLabor,
    updateLabor,
};
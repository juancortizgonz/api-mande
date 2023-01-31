const pool = require('../../db');
const queries = require('./queries');


const getUsuarios = (req, res) => {
    pool.query(queries.getUsuarios, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUsuarioById = (req, res) => {
    const id_usuario = parseInt(req.params.id_usuario);

    pool.query(queries.getUsuarioById, [id_usuario], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUsuario = (req, res) => {
    const { nombre, email, telefono, psw } = req.body;

    res.header("Access-Control-Allow-Origin", "*");

    // Revisar si el correo ya existe
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("El email ya se encuentra registrado.");
        }

        // Agregar el usuario a la BD
        pool.query(queries.addUsuario, [nombre, email, telefono, psw], (error, results) => {
            if (error) throw error;
            res.status(201).send(`Nuevo usuario creado.`);
        });
    });
};

const deleteUsuario = (req, res) => {
    const id_usuario = parseInt(req.params.id_usuario);

    pool.query(queries.getUsuarioById, [id_usuario], (error, results) => {
        const notFoundUsuario = !results.rows.length;
        if (notFoundUsuario) {
            res.send("El usuario no existe en la BD.");
        }

        pool.query(queries.deleteUsuario, [id_usuario], (error, results) => {
            if (error) throw error;
            res.status(200).send("El usuario se ha eliminado.");
        });
    });
};

const updateUsuario = (req, res) => {
    const id_usuario = parseInt(req.params.id_usuario);
    const { nombre, email, telefono } = req.body;

    pool.query(queries.getUsuarioById, [id_usuario], (error, results) => {
        const notFoundUsuario = !results.rows.length;
        if (notFoundUsuario) {
            res.send("El usuario no existe en la BD.");
        }

        pool.query(queries.updateUsuario, [nombre, email, telefono, id_usuario], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se han actualizado los datos del usuario.");
        });
    });
};

const updatePasswordUsuario = (req, res) => {
    const id_usuario = parseInt(req.params.id_usuario);
    const { psw } = req.body;

    pool.query(queries.getUsuarioById, [id_usuario], (error, results) => {
        const notFoundUsuario = !results.rows.length;
        if (notFoundUsuario) {
            res.send("El usuario no existe en la BD.");
        }

        pool.query(queries.updatePasswordUsuario, [psw, id_usuario], (error, results) => {
            if (error) throw error;
            res.status(200).send("Se ha actualizado la contraseña del usuario.");
        });
    });
}

module.exports = {
    getUsuarios,
    getUsuarioById,
    addUsuario,
    deleteUsuario,
    updateUsuario,
    updatePasswordUsuario,
};
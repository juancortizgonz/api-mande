const getUsuarios = 'SELECT * FROM "Usuario"';
const getUsuarioById = 'SELECT * FROM "Usuario" WHERE id_usuario = $1';
const checkEmailExists = 'SELECT u FROM "Usuario" u WHERE u.email = $1';
const addUsuario = 'INSERT INTO "Usuario" (nombre, email, telefono, psw) VALUES ($1, $2, $3, $4)';
const deleteUsuario = 'DELETE FROM "Usuario" WHERE id_usuario = $1';
const updateUsuario = 'UPDATE "Usuario" SET nombre = $1, email = $2, telefono = $3 WHERE id_usuario = $4';

module.exports = {
    getUsuarios,
    getUsuarioById,
    checkEmailExists,
    addUsuario,
    deleteUsuario,
    updateUsuario,
};
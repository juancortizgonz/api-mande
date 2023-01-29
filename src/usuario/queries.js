const getUsuarios = "SELECT * FROM usuario";
const getUsuarioById = "SELECT * FROM usuario WHERE id_usuario = $1";
const checkEmailExists = "SELECT u FROM usuario u WHERE u.email_usuario = $1";
const addUsuario = "INSERT INTO usuario (nombre_usuario, email_usuario, password_usuario, direccion_usuario, path_doc, telefono_usuario) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteUsuario = "DELETE FROM usuario WHERE id_usuario = $1";
const updateUsuario = "UPDATE usuario SET nombre_usuario = $1, direccion_usuario = $2, path_doc = $3, telefono_usuario = $4 WHERE id_usuario = $5";
const updatePasswordUsuario = "UPDATE usuario SET password_usuario = $1 WHERE id_usuario = $2";

module.exports = {
    getUsuarios,
    getUsuarioById,
    checkEmailExists,
    addUsuario,
    deleteUsuario,
    updateUsuario,
    updatePasswordUsuario,
};
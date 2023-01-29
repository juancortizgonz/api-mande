const { Router } = require('express');
const controller = require('./controller');

const router = Router();


router.get('/', controller.getUsuarios);
router.post('/', controller.addUsuario);
router.get('/:id_usuario', controller.getUsuarioById);
router.delete('/:id_usuario', controller.deleteUsuario);

module.exports = router;
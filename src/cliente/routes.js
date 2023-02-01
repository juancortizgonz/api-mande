const { Router } = require('express');
const controller = require('./controller');

const router = Router();


router.get('/', controller.getClientes);
router.post('/', controller.addCliente);
router.get('/all', controller.displayClientes);
router.get('/:id_cliente', controller.getClienteById);
router.delete('/:id_cliente', controller.deleteCliente);
router.get('/form', controller.getIdCliente);

module.exports = router;
const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTrabajadores);
router.post('/', controller.addTrabajador);
router.get('/:id_trabajador', controller.getTrabajadorById);
router.delete('/:id_trabajador', controller.deleteTrabajador);
router.put('/:id_trabajador', controller.updateTrabajador);

module.exports = router;
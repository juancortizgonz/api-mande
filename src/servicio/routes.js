const { Router } = require('express');
const controller = require('./controller');

const router = Router();


router.get('/', controller.getServicios);
router.post('/', controller.addServicio);
router.get('/:id_servicio', controller.getServicioById);
router.delete('/:id_servicio', controller.deleteServicio);
router.put('/:id_servicio', controller.updateServicio);

module.exports = router;
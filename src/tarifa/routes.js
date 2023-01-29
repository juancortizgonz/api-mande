const { Router, application } = require('express');
const controller = require('./controller');

const router = Router();


router.get('/', controller.getTarifas);
router.post('/', controller.addTarifa);
router.get('/:id_tarifa', controller.getTarifaById);
router.delete('/:id_tarifa', controller.deleteTarifa);
router.put('/:id_tarifa', controller.updateTarifa);

module.exports = router;
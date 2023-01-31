const { Router } = require('express');
const controller = require('./controller');

const router = Router();


router.post('/', controller.addPayment);
router.get('/:id_metodo_pago', controller.getPaymentById);

module.exports = router;
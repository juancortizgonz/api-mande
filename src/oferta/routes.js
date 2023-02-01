const { Router } = require('express');
const controller = require('./controller');

const router = Router();


router.get('/', controller.getOfertas);
router.post('/', controller.addOferta);
router.get('/:id_oferta', controller.getOfertaById);
router.delete('/:id_oferta', controller.deleteOferta);
router.put('/:id_oferta', controller.updateOferta);

module.exports = router;
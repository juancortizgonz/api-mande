const { Router, application } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getLabores);
router.post('/', controller.addLabor);
router.get('/:id_labor', controller.getLaborById);
router.delete('/:id_labor', controller.deleteLabor);
router.put('/:id_labor', controller.updateLabor);

module.exports = router;
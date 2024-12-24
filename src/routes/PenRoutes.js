const express = require('express');
const router = express.Router();
const PenController = require('../controllers/PenController');

router.get('/pen', PenController.getPenelitian);
router.post('/pen/insert',PenController.insertPenelitian);
router.put('/pen/update/:id',PenController.updatePenelitian);
router.delete('/pen/delete/:id',PenController.deletePenelitian);

module.exports = router;



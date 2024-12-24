const express = require('express');
const router = express.Router();
const PengController = require('../controllers/PengabdianController');

router.get('/pengabdian', PengController.getPengabdian);
router.post('/pengabdian/insert',PengController.insertPengabdian);
router.put('/pengabdian/update/:id',PengController.updatepengabdian);
router.delete('/pengabdian/delete/:id',PengController.deletepengabdian);

module.exports = router;



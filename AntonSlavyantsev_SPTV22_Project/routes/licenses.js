const express = require('express');
const licensesController = require('../controllers/licensesController');
const router = express.Router();
const { verifyAdmin } = licensesController;

router.post('/create', verifyAdmin, licensesController.createLicense);

router.get('/', licensesController.getAllLicenses);

router.put('/update-status', verifyAdmin, licensesController.updateLicenseStatus);

router.delete('/:id', verifyAdmin, licensesController.deleteLicense);

router.get('/status', licensesController.getLicensesWithStatus);

router.get('/expiring', licensesController.getExpiringLicenses);

router.get('/:licenseId/usage', licensesController.getUsageHistory);

module.exports = (app) => {
    app.use('/api/licenses', router);
};

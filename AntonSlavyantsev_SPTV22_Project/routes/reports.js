const express = require('express');
const reportsController = require('../controllers/reportsController');
const router = express.Router();
const { verifyAdmin } = require('../middleware/authMiddleware'); 

router.post('/generate', verifyAdmin, reportsController.generateLicenseReport);

router.post('/warnings', verifyAdmin, reportsController.generateExpirationWarnings);

module.exports = (app) => {
    app.use('/api/reports', router);
};

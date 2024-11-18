const License = require('../models/License');
const Report = require('../models/Report');
const { Op } = require('sequelize');

exports.generateLicenseReport = async (req, res) => {
    try {
        const licenses = await License.findAll({
            attributes: ['id', 'name', 'key', 'expirationDate', 'status'],
        });

        const reportDetails = {
            totalLicenses: licenses.length,
            activeLicenses: licenses.filter(license => license.status === 'active').length,
            expiredLicenses: licenses.filter(license => license.status === 'expired').length,
            inactiveLicenses: licenses.filter(license => license.status === 'inactive').length,
            licenses: licenses.map(license => ({
                id: license.id,
                name: license.name,
                expirationDate: license.expirationDate,
                status: license.status,
            })),
        };

        const savedReport = await Report.create({
            userId: req.userId, 
            details: JSON.stringify(reportDetails),
        });

        res.send({
            message: "Отчет успешно создан!",
            report: savedReport,
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка генерации отчета." });
    }
};

exports.generateExpirationWarnings = async (req, res) => {
    try {
        const now = new Date();
        const warningDate = new Date();
        warningDate.setDate(now.getDate() + 7); 

        const expiringLicenses = await License.findAll({
            where: {
                expirationDate: {
                    [Op.between]: [now, warningDate],
                },
            },
            attributes: ['id', 'name', 'key', 'expirationDate', 'status'],
        });

        if (expiringLicenses.length === 0) {
            return res.send({ message: "Нет лицензий с истекающим сроком действия." });
        }

        const warningDetails = {
            totalExpiringLicenses: expiringLicenses.length,
            licenses: expiringLicenses.map(license => ({
                id: license.id,
                name: license.name,
                expirationDate: license.expirationDate,
                status: license.status,
            })),
        };

        const savedWarning = await Report.create({
            userId: req.userId, 
            details: JSON.stringify(warningDetails),
        });

        res.send({
            message: "Предупреждение успешно создано!",
            warning: savedWarning,
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка генерации предупреждения." });
    }
};

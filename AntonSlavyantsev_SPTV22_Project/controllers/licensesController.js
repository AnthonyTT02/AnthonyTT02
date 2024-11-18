const License = require('../models/License');
const jwt = require('jsonwebtoken');
const secretKey = "555666";
const Usage = require('../models/Usage');
const { Op } = require('sequelize');

const verifyAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: "Необходим токен авторизации." });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        if (decoded.role !== 'admin') {
            return res.status(403).send({ message: "Недостаточно прав для выполнения действия." });
        }
        next();
    } catch (err) {
        return res.status(401).send({ message: "Неверный токен." });
    }
};

exports.createLicense = async (req, res) => {
    try {
        const { name, key, expirationDate } = req.body;

        const newLicense = await License.create({
            name,
            key,
            expirationDate,
            status: 'inactive', 
        });

        res.status(201).send({
            message: "Лицензия успешно добавлена!",
            license: newLicense,
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка создания лицензии." });
    }
};

exports.getAllLicenses = async (req, res) => {
    try {
        const licenses = await License.findAll();
        res.send(licenses);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка получения списка лицензий." });
    }
};

exports.updateLicenseStatus = async (req, res) => {
    try {
        const { id, status } = req.body;

        const license = await License.findByPk(id);
        if (!license) {
            return res.status(404).send({ message: "Лицензия не найдена." });
        }

        license.status = status;
        await license.save();

        res.send({
            message: "Статус лицензии успешно обновлен!",
            license,
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка обновления статуса лицензии." });
    }
};

exports.deleteLicense = async (req, res) => {
    try {
        const { id } = req.params;

        const license = await License.findByPk(id);
        if (!license) {
            return res.status(404).send({ message: "Лицензия не найдена." });
        }

        await license.destroy();
        res.send({ message: "Лицензия успешно удалена." });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка удаления лицензии." });
    }
};

exports.getLicensesWithStatus = async (req, res) => {
    try {
        const licenses = await License.findAll({
            attributes: ['id', 'name', 'key', 'expirationDate', 'status'],
        });
        res.send(licenses);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка получения лицензий." });
    }
};

exports.getExpiringLicenses = async (req, res) => {
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
        });

        res.send(expiringLicenses);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка получения истекающих лицензий." });
    }
};

exports.getUsageHistory = async (req, res) => {
    try {
        const { licenseId } = req.params;

        const usageRecords = await Usage.findAll({
            where: { licenseId },
            attributes: ['id', 'userId', 'usageCount', 'createdAt'],
        });

        res.send(usageRecords);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка получения истории использования лицензии." });
    }
};

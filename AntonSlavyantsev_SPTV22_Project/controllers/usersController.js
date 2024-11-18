const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secretKey = "555666"; 


exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).send({ message: "Email уже используется." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            role: role || 'user',
        });

        res.status(201).send({
            message: "Регистрация прошла успешно!",
            user: { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role },
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка регистрации." });
    }
};


exports.registerAdmin = async (req, res) => {
    try {
       
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).send({ message: "Необходим токен авторизации." });
        }

        const decoded = jwt.verify(token, secretKey);
        if (decoded.role !== 'admin') {
            return res.status(403).send({ message: "Недостаточно прав для регистрации администратора." });
        }

        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).send({ message: "Email уже используется." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await User.create({
            username,
            email,
            password: hashedPassword,
            role: 'admin',
        });

        res.status(201).send({
            message: "Администратор успешно зарегистрирован!",
            admin: { id: newAdmin.id, username: newAdmin.username, email: newAdmin.email, role: newAdmin.role },
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка регистрации администратора." });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send({ message: "Пользователь не найден." });
        }

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(401).send({ message: "Неверный пароль." });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: '1h' });

        res.send({
            message: "Вход выполнен успешно!",
            token,
            user: { id: user.id, username: user.username, email: user.email, role: user.role },
        });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ошибка аутентификации." });
    }
};

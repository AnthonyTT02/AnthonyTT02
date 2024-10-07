const sequelize = require('./config/database');

sequelize.sync({ alter: true })  // 'alter: true' обновляет структуру таблиц, если это необходимо
  .then(() => {
    console.log('База данных успешно синхронизирована.');
  })
  .catch((error) => {
    console.error('Ошибка синхронизации базы данных:', error);
  });

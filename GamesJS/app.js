const sequelize = require('./config/database');
const models = require('./models'); 


sequelize.sync({ alter: true })  
  .then(() => {
    console.log('База данных успешно синхронизирована.');
  })
  .catch((error) => {
    console.error('Ошибка синхронизации базы данных:', error);
  });

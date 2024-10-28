module.exports = (app) => {
    const Statistics = require('../controllers/statisticsController');
    const router = require('express').Router();

    router.post("/", Statistics.create);       
    router.get("/", Statistics.findAll);      
    

    app.use('/api/Statistics', router);       
};
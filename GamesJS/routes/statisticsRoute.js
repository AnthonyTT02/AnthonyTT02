module.exports = app => {
    const Statistics = require('../controllers/statisticsController');
    const router = require('express').Router();

    router.post("/", Statistics.create);       
    router.get("/", Statistics.findAll);      
    router.get("/:id", Statistics.findOne);    
    router.put("/:id", Statistics.update);     
    router.delete("/:id", Statistics.delete);  

    app.use('/api/Statistics', router);       
};
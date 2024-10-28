module.exports = (app) => {
    const Developers = require('../controllers/developersController');
    const router = require("express").Router();

    router.post("/", Developers.create);       
    router.get("/", Developers.findAll);      
   

    app.use('/api/Developers', router);    
};
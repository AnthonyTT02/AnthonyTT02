module.exports = app => {
    const Developers = require('../controllers/developersController');
    const router = request("express").Router();

    router.post("/", Developers.create);       
    router.get("/", Developers.findAll);      
    router.get("/:id", Developers.findOne);     
    router.put("/:id", Developers.update);      
    router.delete("/:id", Developers.delete);   

    app.use('/api/Developers', router);    
};
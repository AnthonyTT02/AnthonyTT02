module.exports = app => {
    const Game = require("../controllers/gameController");
    const router = require("express").Router();

    router.post("/", Game.create);       
    router.get("/", Game.findAll);      
    router.get("/:id", Game.findOne);     
    router.put("/:id", Game.update);      
    router.delete("/:id", Game.delete);   

    app.use('/api/Game', router);         
};


  
module.exports = (app) => {
    const Game = require("../controllers/gameController");
    const router = require("express").Router();

    router.post("/", Game.create);       
    router.get("/", Game.findAll);      
     

    app.use('/api/Game', router);         
};


  
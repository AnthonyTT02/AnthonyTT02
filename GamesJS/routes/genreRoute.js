module.exports = app => {
    const Genre = require("../controllers/genreController");
    const router = require("express").Router();

    router.post("/", Genre.create);       
    router.get("/", Genre.findAll);       
    router.get("/:id", Genre.findOne);    
    router.put("/:id", Genre.update);     
    router.delete("/:id", Genre.delete);  

    app.use('/api/Genre', router);       
};

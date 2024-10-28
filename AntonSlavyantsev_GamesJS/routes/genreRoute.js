module.exports = (app) => {
    const Genre = require("../controllers/genreController");
    const router = require("express").Router();

    router.post("/", Genre.create);       
    router.get("/", Genre.findAll);       
    

    app.use('/api/Genre', router);       
};

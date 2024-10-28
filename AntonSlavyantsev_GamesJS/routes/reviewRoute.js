module.exports = (app) => {
    const Review = require("../controllers/reviewController");
    const router = require("express").Router();

    router.post("/", Review.create);       
    router.get("/", Review.findAll);      
   

    app.use('/api/Review', router);        
};

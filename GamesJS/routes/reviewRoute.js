module.exports = app => {
    const Review = require("../controllers/reviewController");
    const router = require("express").Router();

    router.post("/", Review.create);       
    router.get("/", Review.findAll);      
    router.get("/:id", Review.findOne);    
    router.put("/:id", Review.update);     
    router.delete("/:id", Review.delete);  

    app.use('/api/Review', router);        
};

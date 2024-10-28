const Review = require("../models/review");

exports.create = (req, res) => {
    if (!req.body.review_text) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const review = {
        review_text: req.body.review_text,
        game_id: req.body.game_id
    };

    Review.create(review)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Review."
            });
        });
};

exports.findAll = (req, res) => {
    Review.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reviews."
            });
        });
};

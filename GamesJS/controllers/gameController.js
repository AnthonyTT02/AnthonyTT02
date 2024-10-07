const Game = require("../models/game");


exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const game = {
        title: req.body.title,
        release_date: req.body.release_date,
        team: req.body.team,
        rating: req.body.rating,
        genres: req.body.genres,
        summary: req.body.summary,
        plays: req.body.plays,
        playing: req.body.playing,
        backlogs: req.body.backlogs,
        wishlist: req.body.wishlist
    };

    Game.create(game)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Game."
            });
        });
};


exports.findAll = (req, res) => {
    Game.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving games."
            });
        });
};

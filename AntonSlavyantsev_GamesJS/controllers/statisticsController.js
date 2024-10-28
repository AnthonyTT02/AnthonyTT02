const Statistics = require("../models/statistics");

exports.create = (req, res) => {
    const stats = {
        game_id: req.body.game_id,
        times_listed: req.body.times_listed,
        plays: req.body.plays,
        playing: req.body.playing,
        backlogs: req.body.backlogs,
        wishlist: req.body.wishlist
    };

    Statistics.create(stats)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Statistics."
            });
        });
};

exports.findAll = (req, res) => {
    Statistics.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving statistics."
            });
        });
};

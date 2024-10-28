const DeveloperTeam = require("../models/developer");

exports.create = (req, res) => {
    const team = {
        name: req.body.name
    };

    DeveloperTeam.create(team)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Developer Team."
            });
        });
};

exports.findAll = (req, res) => {
    DeveloperTeam.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving developer teams."
            });
        });
};

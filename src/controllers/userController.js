const User = require("../models/users");

const getAllUsers = (req, res) => {
    User.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
};

const createNewUser = (req, res) => {
    User.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
};

const updateOneUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
};

const deleteOneUser = (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }, (err, result) => {
        if(err) throw new Error(err);
        res.end();
    });
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};
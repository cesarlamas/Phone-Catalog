const Phone = require('../models/model.phone');

exports.getAllPhones = async(req,res) => {
    try {
        const phones = await Phone.find()
        res.status(200)
        res.send(phones)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

exports.addPhone = async(req,res) => {
    try {
        const phone = req.body
        console.log(phone)
        const add = await Phone.create(phone)
        res.status(201);
        res.send(add)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteOne = async(req,res) => {
    const deleteOne = await Phone.findByIdAndDelete({_id : req.params.id});

    res.json(deleteOne);
};

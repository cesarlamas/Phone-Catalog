const mongoose = require('./model.index')

const phoneSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    manufacturer : {
        type: String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    imageFileName : {
        type: String,
        required: true
    },
    screen : {
        type: String,
        required: true
    },
    processor : {
        type: String,
        required : true
    },
    ram : {
        type: Number,
        required : true
    }
})

const Phone = mongoose.model("phone", phoneSchema);

module.exports = Phone

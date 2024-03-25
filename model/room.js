const mongoose = require('mongoose')

const roomSchema = mongoose.Schema(
    {
        roomnumber:{
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamp: true
    }
)


const Room = mongoose.model("Room", roomSchema);

module.exports = Room
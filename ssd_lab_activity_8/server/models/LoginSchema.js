const mongoose = require('mongoose')

let Schema = mongoose.Schema
const LoginSchema = new Schema(
    {
        rollnumber: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const UserData = mongoose.model('UserData', LoginSchema)

module.exports = UserData

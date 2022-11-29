const mongoose = require('mongoose')

let Schema = mongoose.Schema
const LoginSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required:true,
        }
    },
    {
        timestamps: true
    }
)

const CheckerData = mongoose.model('CheckerData', LoginSchema)

module.exports = CheckerData

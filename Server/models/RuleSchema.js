const mongoose = require('mongoose')

let Schema = mongoose.Schema
const RuleSchema = new Schema(
    {
        Email: {
            type: String,
            required: true,
        },
        Name: {
            type: String,
            required: true,
        },
        Content: {
            type: String,
            required:true,
        }
    },
    {
        timestamps: true
    }
)

const RuleData = mongoose.model('RuleData', RuleSchema)

module.exports = RuleData

const mongoose = require('mongoose')

let Schema = mongoose.Schema
const StudentSchema = new Schema(
    {
        examName: {
            type: String,
            required: true
        },
        courseName: {
            type: String,
            required: true
        },
        taRollNumber: {
            type: String,
            required: true
        },
        stdRollNumber: {
            type: String,
            required: true
        },
        comment: {
            type: String
        },
        questionNumber: {
            type: Number
        }
    },
    { timestamps: true }
)

const StudentQuery = mongoose.model('StudentQuery', StudentSchema)

module.exports = StudentQuery

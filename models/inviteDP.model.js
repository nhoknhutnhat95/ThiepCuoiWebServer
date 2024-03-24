const { model, Schema } = require('mongoose')

const inviteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
        default: 'female'
    }
})

module.exports = {
    inviteSchema: model('inviteDP', inviteSchema)
}
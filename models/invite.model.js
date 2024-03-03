const { model, Schema } = require('mongoose')

const inviteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    withWho: {
        type: String,
        required: true
    }
})

module.exports = {
    inviteSchema : model('invite', inviteSchema)
}
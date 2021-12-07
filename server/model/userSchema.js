import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    mobile: {
        type: String
    }
})

const user = mongoose.model('user', UserSchema)
export default user
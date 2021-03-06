import mongoose from '../Database/index.js';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function (next) {
    const hashed = await bcrypt.hash(this.password, 10)

    this.password = hashed

    next()
})

const User = mongoose.model('User', UserSchema)

export default User;
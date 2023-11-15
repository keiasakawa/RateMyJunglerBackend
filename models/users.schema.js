import mongoose from 'mongoose'
const usersSchema = new mongoose.Schema(
    {
        email: String,
        password: String
    }
);

const usersModel = mongoose.model('Users', usersSchema);

export default usersModel;
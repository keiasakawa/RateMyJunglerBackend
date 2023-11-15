import mongoose from 'mongoose';
import usersModel from '../models/users.schema.js';

const getUser = async(email, password) => {
    return usersModel.findOne({email: email, password: password})
}

const postUser = async(email, password) => {
    if (usersModel.findOne({email: email})) {
        throw new Error('User Already Exists')
    }
    const createUser = new usersModel({email: email, password: password})
    return usersModel.save(createUser)
}

export {getUser, postUser}
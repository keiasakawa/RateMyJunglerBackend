import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import usersModel from '../models/users.schema.js';

const saltRounds = 10;

function validateUser(password, hash) {
    bcrypt
        .compare(password, hash)
        .then(res => {return res})
        .catch((err) => console.err(err.message))
}

const getUser = async(email, password) => {
    usersModel
    .findOne({email: email})
    .then(res => {
        if (validateUser(password, res.password)) {
            return res;
        }
        else {
            return null;
        }
    })
    .catch(() => {return null}) 
}

const postUser = async(email, password) => {
    const createUser = new usersModel({email: email, password: password})
    return usersModel.save(createUser)
}

const userExists = async (email) => {
    usersModel
        .findOne({email: email})
        .then(res => {
            return res;
        })
}

export {getUser, postUser, userExists}
import mongoose from 'mongoose';
import ratingsModel from '../models/ratings.schema.js';

const getRatings = async (body) => {
    const accountId = body.accountId
    const getSort = body.sortBy
    let order = 0;
    let sortBy = ''
    if (getSort == 'recent') {
        order = -1
        sortBy = 'datetime'
    }
    else if (getSort == 'oldest') {
        order = 1
        sortBy = 'datetime'
    }
    else if (getSort == 'highest') {
        order = -1
        sortBy = 'stars'
    }
    else {
        order = 1
        sortBy = 'stars'
    }
    return ratingsModel.find({ accountId: accountId }).sort({[sortBy]: order});
}

const postRating = async (rating) => {
    const createdRating = new ratingsModel({...rating})
    return createdRating.save();
}

export { getRatings, postRating };
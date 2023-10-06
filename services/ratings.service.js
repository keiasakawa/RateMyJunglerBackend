import mongoose from 'mongoose';
import ratingsModel from '../models/ratings.schema.js';

const getRatings = async (accountId) => {
    return ratingsModel.find({ accountId: accountId });
}

const postRating = async (rating) => {
    console.log(rating)
    const createdRating = new ratingsModel({...rating})
    return createdRating.save();
}

export { getRatings, postRating };
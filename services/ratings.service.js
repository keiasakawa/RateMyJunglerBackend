import mongoose from 'mongoose';

import ratingsModel from '../models/ratings.schema';

const getRatings = async (accountId) => {
    return ratingsModel.find({ accountId: accountId });
}

export { getRatings };
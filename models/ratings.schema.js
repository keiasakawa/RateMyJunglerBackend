import mongoose from 'mongoose';

const ratingsSchema = new mongoose.Schema(
    {
        accountId : { type: String, required: true },
        stars: { type: Number, required: true },
        message: String,
    }
);

const ratingsModel = mongoose.model('Ratings', ratingsScema);

export default ratingsModel;
import mongoose from 'mongoose';

const ratingsSchema = new mongoose.Schema(
    {
        puuid : { type: String, required: true },
        stars: { type: Number, required: true },
        message: String,
        datetime: Date
    }
);

const ratingsModel = mongoose.model('Ratings', ratingsSchema);

export default ratingsModel;
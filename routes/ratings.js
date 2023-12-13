import express from 'express';
import * as ratingsService from '../services/ratings.service.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const filter = {puuid: req.params.id, sortBy: req.query.sort}
        const allRatings = await ratingsService.getRatings(filter);
        res.status(200).send(allRatings);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message});
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const mongoResponse = await ratingsService.postRating(req.body);
        res.status(200).send(mongoResponse)
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});

export default router;
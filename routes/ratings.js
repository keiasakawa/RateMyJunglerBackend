import express from 'express';
import * as ratingsService from '../services/ratings.service';

const router = express.Router();

router.get('/:id', async (req, res) => {
    var id = req.params.id;
    try {
        const allRatings = await ratingsService.getRatings(id);
        res.status(200).send(allRatings);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message});
    }
});

export default router;
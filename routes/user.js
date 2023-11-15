import express from 'express';
import * as usersService from '../services/users.service.js';

const router = express.Router();

router.post('/login', async(req, res) => {
    try {
        const mongoResponse = await usersService.getUser(req.body.email, req.body.password);
        res.status(200).send(mongoResponse)
    }
    catch(err){
        console.error(err);
        res.status(400).json({ message: err.message});
    }
})

export default router;
import express from 'express';
import {getUser, postUser, userExists} from '../services/users.service.js';

const router = express.Router();

router.post('/login', async(req, res) => {
    try {
        const mongoResponse = await getUser(req.body.email, req.body.password);
        if (mongoResponse) {
            res.status(200).send(mongoResponse)
        }
        else {
            res.status(401).json({message: 'Email or password is invalid'})
        }
    }
    catch(err){
        console.error(err);
        res.status(400).json({ message: err.message});
    }
})

router.post('/register', async(req,res) => {
    try {
        const {email, password} = req.body;
        if (await userExists(email)) {
            res.status(401).json({message: "User email already exists"})
        }

        bcrypt
            .hash(password, saltRounds)
            .then((hash) => {const mongoResponse = postUser(email, password); res.status(200).send(mongoResponse)})
    }
    catch(err){
        console.error(err);
        res.status(400).json({ message: err.message});
    }
})

export default router;
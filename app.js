import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import profileRouter from './routes/profile.js'
import ratingsRouter from './routes/ratings.js'
import infoRouter from './routes/info.js'
import {config} from './config.js'

var app = express();
app.use(express.json(),cors())

mongoose.connect(config.MONGO_URI)

app.use('/', profileRouter);
app.use('/ratings', ratingsRouter);
app.use('/info', infoRouter)

app.listen(3001);
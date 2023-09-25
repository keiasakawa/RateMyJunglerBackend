import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import indexRouter from './routes/index.js'
import ratingsRouter from './routes/ratings.js'
import {config} from './config.js'

var app = express();
app.use(cors())

mongoose.connect(config.MONGO_URI)

app.use('/', indexRouter);
app.use('/ratings', ratingsRouter);

app.listen(3001);
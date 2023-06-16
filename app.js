import express from 'express'
import cors from 'cors'
import indexRouter from './routes/index.js'

var app = express();
app.use(cors())

app.use('/', indexRouter);

app.listen(3000);
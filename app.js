import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import profileRouter from "./routes/profile.js";
import ratingsRouter from "./routes/ratings.js";
import infoRouter from "./routes/info.js";
import userRouter from "./routes/user.js";

var app = express();
app.use(express.json(), cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect(process.env.MONGO_URI);

app.use("/", profileRouter);
app.use("/ratings", ratingsRouter);
app.use("/info", infoRouter);
app.use("/user", userRouter);

app.listen(3001);

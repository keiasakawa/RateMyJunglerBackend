import express from "express";
var router = express.Router();
import makeAPIRequest from "../api_request.js";

router.get("/:id", function (req, res) {
  var id = req.params.id;
  makeAPIRequest(
    `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.API_KEY}`,
    res
  );
});

export default router;

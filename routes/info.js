import {config} from '../config.js'

import express from 'express'
var router = express.Router();
import makeAPIRequest from '../api_request.js'

router.get('/:id', function(req,res) {
    var id = req.params.id;
    makeAPIRequest(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${name}?api_key=${config.API_KEY}`, res)
})



export default router;
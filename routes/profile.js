import {config} from '../config.js'

import express from 'express'
var router = express.Router();
import makeAPIRequest from '../api_request.js'

router.get('/summoner/:name', function(req,res) {
    var name = req.params.name;
    makeAPIRequest(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${config.API_KEY}`, res)
})

router.get('/')

export default router;
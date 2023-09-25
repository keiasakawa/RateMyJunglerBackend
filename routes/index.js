import {config} from '../config.js'

import express from 'express'
var router = express.Router();
import fetch from 'node-fetch'
import fs from 'fs'

function makeAPIRequest(url, res) {
    var headers = {
        "Content-Type": "application/json",
    }
    console.log(url)
    fetch(url, {method: 'GET', headers: headers}).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(json => {
        console.log(json)
        res.status(200).json(json);
    }).catch(err => {
        console.error(err);
    })
}

router.get('/summoner/:name', function(req,res) {
    var name = req.params.name;
    makeAPIRequest(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${config.API_KEY}`, res)
})

router.get('/matches/:id', function(req,res) {
    var id = req.params.id;
    makeAPIRequest(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${id}/ids?api_key=${config.API_KEY}`, res)
})

router.get('/current-match/:id', function (req,res) {
    var id = req.params.id;
    makeAPIRequest(`https://na1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${config.API_KEY}`, res)
})


export default router;
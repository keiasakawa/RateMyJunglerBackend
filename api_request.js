import fetch from 'node-fetch'

function makeAPIRequest(url, res) {
    var headers = {
        "Content-Type": "application/json",
    }
    fetch(url, {method: 'GET', headers: headers}).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(json => {
        res.status(200).json(json);
    }).catch(err => {
        console.error(err);
    })
}

export default makeAPIRequest;
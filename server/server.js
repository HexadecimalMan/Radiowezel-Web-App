require("dotenv").config()
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.locals.accessToken = ""
app.locals.refreshToken = "";
app.locals.expiresIn = "";

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        app.locals.accessToken = data.body.access_token,
        app.locals.refreshToken = data.body.refresh_token,
        app.locals.expiresIn = data.body.expires_in
        res.json({
            expiresIn: data.body.expires_in
        })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
    
})

app.listen(3002)
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize the global state to store access and refresh tokens
app.locals.accessToken = "";
app.locals.refreshToken = "";
app.locals.expiresIn = 0;

//declare spotifyApi
const spotifyApi = new SpotifyWebApi({
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

//declare track state
let currentSong = "";
let currentSongImage = "";
let currentSongAuthor = "";

app.post('/sign_in', (req, res) => {
  let login = req.body.login
  let password = req.body.password

  console.log(login + " & " + password)
  res.send("Got it!")
});

app.get('/wfw', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(['user-read-private', 'user-read-email'], 'state'));
});

app.post('/authorize', (req, res) => {
  
})

// Function to refresh the access token
function refreshAccessToken() {
  spotifyApi.refreshAccessToken()
    .then((data) => {
      app.locals.accessToken = data.body.access_token;
      app.locals.refreshToken = data.body.refresh_token;
      app.locals.expiresIn = data.body.expires_in;

      console.log('The access token has been refreshed!');
      console.log('New access token:', data.body.access_token);
      
      // Set the new access token on the Spotify API client
      spotifyApi.setAccessToken(data.body.access_token);
      //spotifyApi.setRefreshToken(data.body.refresh_token);
      
      // Schedule the next token refresh slightly before the token actually expires
      setTimeout(() => refreshAccessToken(), (app.locals.expiresIn - 300) * 1000); // Refresh 5 minutes
    })
    .catch((err) => {
      console.error('Could not refresh access token', err);
    });
}

function getAccessToken(code) {
    spotifyApi.authorizationCodeGrant(code).then((data) => {
    app.locals.accessToken = data.body.access_token;
    app.locals.refreshToken = data.body.refresh_token;
    app.locals.expiresIn = data.body.expires_in;

    // Set the access token and refresh token on the Spotify API client
    console.log(data.body.access_token)
    spotifyApi.setAccessToken(data.body.access_token);
    spotifyApi.setRefreshToken(data.body.refresh_token);

    // Schedule the token refresh just before it expires
    setTimeout(() => refreshAccessToken(), (app.locals.expiresIn - 300) * 1000); // Refresh 5 minutes before expiry
    getCurrentlyPlaying();
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(400);
  });
}

//function to get currently played song title, image, author and time to an end and display it in console. Call this function again when song ends
function getCurrentlyPlaying() {
  spotifyApi.getMyCurrentPlayingTrack()
    .then((data) => {
      if (data.body.is_playing) {
        //save currently playing song to variable
        currentSong = data.body.item.name;
        currentSongImage = data.body.item.album.images[0].url;
        currentSongAuthor = data.body.item.artists[0].name;

        console.log('Now playing:', currentSong);
        console.log('Song ends in:', data.body.item.duration_ms - data.body.progress_ms, 'ms');
        console.log('Song author:', currentSongAuthor);
        console.log('Song image:', currentSongImage);

        setTimeout(() => getCurrentlyPlaying(), data.body.item.duration_ms - data.body.progress_ms + 5000);
      } else {
        console.log('Nothing currently playing.');
        setTimeout(() => getCurrentlyPlaying(), 10000);
      }
    })
    .catch((err) => {
      console.error('Could not get currently playing song', err);
      setTimeout(() => getCurrentlyPlaying(), 10000);
    });
}

//send currently playing song to user when requested
app.get('/currentSong', (req, res) => {
  if (!app.locals.accessToken) {
    res.send("Spotify API not initialized");
  }
  else {
    res.json({ currentSong, currentSongImage, currentSongAuthor });
  }
});

app.listen(3002, () => {
  console.log('Server running on http://localhost:3002');
});

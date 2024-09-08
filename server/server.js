require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize the global state to store access and refresh tokens
app.locals.code = "AQAWXB2Zv29AXpugOT1rJAYUmXetW1h2VMq2wB9pB9J2ufrx2Oj2t48lv-lxtGSEtfTp4kI2hSEhUvltpZNovj6aP7n1wRWHFTQtCXg30Wacn7AlN95QY5NE_hg_W5DkPirguI9AxcgFRFYeeyqYrLsFNqlHV0fNXTeLkQtGbQJ9MPVRYkjuQo4XzpsH3Cta5LlGIbYdBKDGt1J2ekiW8T1CGH4UW-BXqFeUp-mLyBR8Np-3g-kVNUKET8hSZhQN4nMA_8GT-n54kRy2XZinaFMNMNnkWcErgYs3VADK-A4pxnE1NG8Q76n4FTvxVG4dt1i7ZkgjbIGZKfC_5dpbKmbY-4C53w";
app.locals.accessToken = "";
app.locals.refreshToken = "";
app.locals.expiresIn = 0;

// Function to refresh the access token
function refreshAccessToken(spotifyApi) {
  spotifyApi.refreshAccessToken()
    .then((data) => {
      app.locals.accessToken = data.body.access_token;
      app.locals.refreshToken = data.body.refresh_token;
      app.locals.expiresIn = data.body.expires_in;

      console.log('The access token has been refreshed!');
      console.log('New access token:', data.body.access_token);
      
      // Set the new access token on the Spotify API client
      spotifyApi.setAccessToken(data.body.access_token);
      spotifyApi.setRefreshToken(data.body.refresh_token);
      
      // Schedule the next token refresh slightly before the token actually expires
      setTimeout(() => refreshAccessToken(spotifyApi), (data.body.expires_in - 300) * 1000); // Refresh 5 minutes before expiry
    })
    .catch((err) => {
      console.error('Could not refresh access token', err);
    });
}

function getAccessToken() {
  const code = app.locals.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    app.locals.accessToken = data.body.access_token;
    app.locals.refreshToken = data.body.refresh_token;
    app.locals.expiresIn = data.body.expires_in;

    // Set the access token and refresh token on the Spotify API client
    console.log(data.body.access_token)
    spotifyApi.setAccessToken(data.body.access_token);
    spotifyApi.setRefreshToken(data.body.refresh_token);

    // Schedule the token refresh just before it expires
    setTimeout(() => refreshAccessToken(spotifyApi), 5 * 1000); // Refresh 5 minutes before expiry
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(400);
  });
}

app.listen(3002, () => {
  console.log('Server running on http://localhost:3002');
  getAccessToken()
});

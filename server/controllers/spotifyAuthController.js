const { json } = require("body-parser");
const { URLSearchParams } = require("url");
const request = require("request");

require("dotenv").config();

const spotify_id = process.env.SPOTIFY_ID;
const spotify_secret = process.env.SPOTIFY_SECRET;
const redirect = process.env.REDIRECT_URI;

//This handles the user authorization for spotify
const handleAuth = async (req, res) => {
  const generateRandomString = (length) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const scope =
    "streaming \
                    user-read-email \
                    user-read-private";

  const state = generateRandomString(16);

  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_id,
    scope: scope,
    redirect_uri: redirect,
    state: state,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize/?" +
      auth_query_parameters.toString()
  );
};

//this grabs the access token
const handleCallBack = async (req, res) => {
  const code = req.query.code;

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: redirect,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(spotify_id + ":" + spotify_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.redirect("/");
    }
  });
};

//Returning the access token

const handleReturn = async (req, res) => {
  res.json({
    access_token: access_token,
  });
};

module.exports = { handleAuth, handleCallBack, handleReturn };

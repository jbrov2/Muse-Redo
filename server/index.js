const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//MIDDLEWARE

//json
app.use(express.json());

//for form data
app.use(express.urlencoded({ extended: true }));

//Cross Origin
app.use(cors({ origin: "http://localhost:5173" }));

//Grabbing PORT
const PORT = process.env.PORT;
const spotify_id = process.env.SPOTIFY_ID;
const spotify_secret = process.env.SPOTIFY_SECRET;
const redirect = process.env.REDIRECT_URI;

//Routes

app.get("/", (req, res) => {
  res.send("Testing");
});

//Spotify
app.use("/auth", require("./routes/api/spotify"));

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});

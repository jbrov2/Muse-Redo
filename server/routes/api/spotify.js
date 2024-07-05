const express = require("express");
const router = express.Router();
const spotifyAuthController = require("../../controllers/spotifyAuthController");

// router
//     .route("/")
//     .get(spotifyAuthController.handleAuth)
//     .get(spotifyAuthController.handleCallBack)
//     .get(spotifyAuthController.handleReturn)

router.route("/login").get(spotifyAuthController.handleAuth);
router.route("/callback").get(spotifyAuthController.handleCallBack);
router.route("/token").get(spotifyAuthController.handleReturn);

module.exports = router;

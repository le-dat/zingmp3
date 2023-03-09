const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");

router.get("/liked/song/:email", UserController.getLikedSong);
router.post("/liked/song/add", UserController.addLikedSong);
router.put("/liked/song/remove", UserController.removeLikedSong);

router.get("/liked/album/:email", UserController.getLikedAlbum);
router.post("/liked/album/add", UserController.addLikedAlbum);
router.put("/liked/album/remove", UserController.removeLikedAlbum);

module.exports = router;

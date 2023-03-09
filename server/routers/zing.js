const express = require("express");
const router = express.Router();

const ZingController = require("../controllers/zing");

// getSong
router.get("/song", ZingController.getSong);

// getDetailPlaylist
router.get("/detail-playlist", ZingController.getDetailPlaylist);

// getHome
router.get("/home", ZingController.getHome);

// getTop100
router.get("/top100", ZingController.getTop100);

// getChartHome
router.get("/chart-home", ZingController.getChartHome);

// getNewReleaseChart
router.get("/new-release-chart", ZingController.getNewReleaseChart);

// getInfoSong
router.get("/song-info", ZingController.getInfoSong);

// getArtist
router.get("/artist", ZingController.getArtist);

// getListArtistSong
router.get("/artist-list-song", ZingController.getListArtistSong);

// getLyric
router.get("/lyric", ZingController.getLyric);

// search
router.get("/search", ZingController.search);

// getListMV
router.get("/list-mv", ZingController.getListMV);

// getCategoryMV
router.get("/category-mv", ZingController.getCategoryMV);

// getVideo
router.get("/video", ZingController.getVideo);

module.exports = router;

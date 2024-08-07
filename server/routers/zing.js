const express = require("express");
const router = express.Router();
const ZingController = require("../controllers/zing");

const defineRoute = (path, handler) => {
  router.get(path, handler);
};

defineRoute("/song", ZingController.getSong);
defineRoute("/detail-playlist", ZingController.getDetailPlaylist);
defineRoute("/home", ZingController.getHome);
defineRoute("/top100", ZingController.getTop100);
defineRoute("/chart-home", ZingController.getChartHome);
defineRoute("/new-release-chart", ZingController.getNewReleaseChart);
defineRoute("/song-info", ZingController.getInfoSong);
defineRoute("/artist", ZingController.getArtist);
defineRoute("/artist-list-song", ZingController.getListArtistSong);
defineRoute("/lyric", ZingController.getLyric);
defineRoute("/search", ZingController.search);
defineRoute("/list-mv", ZingController.getListMV);
defineRoute("/category-mv", ZingController.getCategoryMV);
defineRoute("/video", ZingController.getVideo);

module.exports = router;

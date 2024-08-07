const { ZingMp3 } = require("zingmp3-api-full");

const handleApiRequest = (apiMethod, req, res) => {
  apiMethod(req.query)
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
};

class ZingController {
  getSong(req, res) {
    handleApiRequest(ZingMp3.getSong.bind(ZingMp3, req.query.id), req, res);
  }

  getDetailPlaylist(req, res) {
    handleApiRequest(ZingMp3.getDetailPlaylist.bind(ZingMp3, req.query.id), req, res);
  }

  getHome(req, res) {
    handleApiRequest(ZingMp3.getHome.bind(ZingMp3), req, res);
  }

  getTop100(req, res) {
    handleApiRequest(ZingMp3.getTop100.bind(ZingMp3), req, res);
  }

  getChartHome(req, res) {
    handleApiRequest(ZingMp3.getChartHome.bind(ZingMp3), req, res);
  }

  getNewReleaseChart(req, res) {
    handleApiRequest(ZingMp3.getNewReleaseChart.bind(ZingMp3), req, res);
  }

  getInfoSong(req, res) {
    handleApiRequest(ZingMp3.getInfoSong.bind(ZingMp3, req.query.id), req, res);
  }

  getArtist(req, res) {
    handleApiRequest(ZingMp3.getArtist.bind(ZingMp3, req.query.name), req, res);
  }

  getListArtistSong(req, res) {
    handleApiRequest(
      ZingMp3.getListArtistSong.bind(ZingMp3, req.query.id, req.query.page, req.query.count),
      req,
      res
    );
  }

  getLyric(req, res) {
    handleApiRequest(ZingMp3.getLyric.bind(ZingMp3, req.query.id), req, res);
  }

  search(req, res) {
    handleApiRequest(ZingMp3.search.bind(ZingMp3, req.query.keyword), req, res);
  }

  getListMV(req, res) {
    handleApiRequest(
      ZingMp3.getListMV.bind(ZingMp3, req.query.id, req.query.page, req.query.count),
      req,
      res
    );
  }

  getCategoryMV(req, res) {
    handleApiRequest(ZingMp3.getCategoryMV.bind(ZingMp3, req.query.id), req, res);
  }

  getVideo(req, res) {
    handleApiRequest(ZingMp3.getVideo.bind(ZingMp3, req.query.id), req, res);
  }
}

module.exports = new ZingController();

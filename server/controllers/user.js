const User = require("../models/user");

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const handleServerError = (res, error) => {
  console.log(error);
  return res.json({ status: false, msg: `Server error ${error}` });
};

const getLikedSong = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await findUserByEmail(email);
    if (user) {
      return res.json({ status: true, songs: user.likedSong });
    }
    return res.json({ status: false, msg: "User not found" });
  } catch (error) {
    return handleServerError(res, error);
  }
};

const getLikedAlbum = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await findUserByEmail(email);
    if (user) {
      return res.json({ status: true, album: user.likedAlbum });
    }
    return res.json({ status: false, msg: "Không tìm thấy người dùng" });
  } catch (error) {
    return handleServerError(res, error);
  }
};

const addLikedSong = async (req, res, next) => {
  try {
    const { email, song } = req.body;
    const user = await findUserByEmail(email);
    if (user) {
      const { likedSong } = user;
      const songAlreadyLiked = likedSong.find((item) => item.encodeId === song.encodeId);
      if (songAlreadyLiked) {
        return res.json({ status: false, msg: "Bài hát đã thích" });
      }
      const newSong = [...likedSong, song];
      await User.findByIdAndUpdate(user._id, { likedSong: newSong }, { new: true });
      return res.json({ status: true, msg: "Đã thêm bài hát vào thư viện" });
    } else {
      await User.create({ email, likedSong: [song], likedAlbum: [] });
      return res.json({ status: true, msg: "Đã thêm bài hát vào thư viện" });
    }
  } catch (error) {
    return handleServerError(res, error);
  }
};

const addLikedAlbum = async (req, res, next) => {
  try {
    const { email, album } = req.body;
    const user = await findUserByEmail(email);
    if (user) {
      const { likedAlbum } = user;
      const albumAlreadyLiked = likedAlbum.find((item) => item.encodeId === album.encodeId);
      if (albumAlreadyLiked) {
        return res.json({ status: false, msg: "Album đã thích" });
      }
      const newAlbum = [...likedAlbum, album];
      await User.findByIdAndUpdate(user._id, { likedAlbum: newAlbum }, { new: true });
      return res.json({ status: true, msg: "Đã thêm album vào thư viện" });
    } else {
      await User.create({ email, likedAlbum: [album], likedSong: [] });
      return res.json({ status: true, msg: "Đã thêm album vào thư viện" });
    }
  } catch (error) {
    return handleServerError(res, error);
  }
};

const removeLikedSong = async (req, res, next) => {
  try {
    const { email, songId } = req.body;
    const user = await findUserByEmail(email);
    if (user) {
      const { likedSong } = user;
      const newSong = likedSong.filter((song) => song.encodeId !== songId);
      await User.findByIdAndUpdate(user._id, { likedSong: newSong }, { new: true });
      return res.json({ status: true, msg: "Đã xóa bài hát khỏi thư viện" });
    }
    return res.json({ status: false, msg: "User not found" });
  } catch (error) {
    return handleServerError(res, error);
  }
};

const removeLikedAlbum = async (req, res, next) => {
  try {
    const { email, albumId } = req.body;
    const user = await findUserByEmail(email);
    if (user) {
      const { likedAlbum } = user;
      const newAlbum = likedAlbum.filter((item) => item.encodeId !== albumId);
      await User.findByIdAndUpdate(user._id, { likedAlbum: newAlbum }, { new: true });
      return res.json({ status: true, msg: "Đã xóa album khỏi thư viện" });
    }
    return res.json({ status: false, msg: "User not found" });
  } catch (error) {
    return handleServerError(res, error);
  }
};

class UserController {
  getLikedSong = getLikedSong;
  addLikedSong = addLikedSong;
  removeLikedSong = removeLikedSong;

  getLikedAlbum = getLikedAlbum;
  addLikedAlbum = addLikedAlbum;
  removeLikedAlbum = removeLikedAlbum;
}

module.exports = new UserController();

const User = require("../models/user");

const getLikedSong = async(req, res, next) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ status: true, songs: user.likedSong });
        }
        return res.json({ status: false, msg: "User not found" });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, msg: `Server error ${error}` });
    }
};

const getLikedAlbum = async(req, res, next) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if (user) {
            return res.json({ status: true, album: user.likedAlbum });
        }
        return res.json({ status: false, msg: "User not found" });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, msg: `Server error ${error}` });
    }
};
const addLikedSong = async(req, res, next) => {
    try {
        const { email, song } = req.body;
        console.log(song);
        const user = await User.findOne({ email });
        if (user) {
            const { likedSong } = user;
            const songAlreadyLiked = await likedSong.find((item) => item.encodeId === song.encodeId);
            if (songAlreadyLiked) {
                return res.json({ status: false, msg: "Song already liked" });
            }
            const newSong = [...likedSong, song];
            await User.findByIdAndUpdate(user._id, { likedSong: newSong }, { new: true });
            return res.json({ status: true, msg: "Đã thêm bài hát vào thư viện" });
        } else {
            await User.create({ email, likedSong: [song], likedAlbum: [] });
            return res.json({ status: true, msg: "Đã thêm bài hát vào thư viện" });
        }
    } catch (error) {
        console.log(error);
        return res.json({ status: false, msg: `Server error ${error}` });
    }
};

const addLikedAlbum = async(req, res, next) => {
    try {
        const { email, album } = req.body;
        console.log(album);
        const user = await User.findOne({ email });
        if (user) {
            const { likedAlbum } = user;
            const albumAlreadyLiked = await likedAlbum.find((item) => item.encodeId === album.encodeId);
            if (albumAlreadyLiked) {
                return res.json({ status: false, msg: "Album already liked" });
            }
            const newAlbum = [...likedAlbum, album];
            await User.findByIdAndUpdate(user._id, { likedAlbum: newAlbum }, { new: true });
            return res.json({ status: true, msg: "Đã thêm album vào thư viện" });
        } else {
            await User.create({ email, likedAlbum: [album], likedSong: [] });
            return res.json({ status: true, msg: "Đã thêm album vào thư viện" });
        }
    } catch (error) {
        console.log(error);
        return res.json({ status: false, msg: `Server error ${error}` });
    }
};
const removeLikedSong = async(req, res, next) => {
    try {
        const { email, songId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedSong } = user;
            const newSong = likedSong.filter((song) => song.encodeId !== songId);
            await User.findByIdAndUpdate(user._id, { likedSong: newSong }, { new: true });
            return res.json({ status: true, msg: "Đã xóa bài hát khỏi thư viện" });
        }
        return res.json({ status: false, msg: "User not found" });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, msg: `Server error ${error}` });
    }
};
const removeLikedAlbum = async(req, res, next) => {
    try {
        const { email, albumId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedAlbum } = user;
            const newAlbum = likedAlbum.filter((item) => item.encodeId !== albumId);
            await User.findByIdAndUpdate(user._id, { likedAlbum: newAlbum }, { new: true });
            return res.json({ status: true, msg: "Đã xóa album khỏi thư viện" });
        }
        return res.json({ status: false, msg: "User not found" });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, msg: `Server error ${error}` });
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
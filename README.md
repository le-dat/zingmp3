### 🚀 Live Demo (https://ledat-zingmp3.vercel.app/)

![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot1.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot2.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot3.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot4.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot5.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot6.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot7.png)

### Feature:

- Play, pause, skip to the next or previous music track.
- Adjust the volume and seek through the audio.
- View the playlist of songs.
- Watch videos.
- Search for songs or artists.
- Change the background.
- Login or register using email or Google.
- Add or remove songs from favorites.
- To view real-time lyrics for audio,

### Server

```
cd server
```

Create an `.env` file and add the following variables.
[Login to account MongoDB and create database](https://www.mongodb.com/)

```
PORT=5000
MONGODB_USERNAME=le-dat
MONGODB_PASSWORD=1234
ACCESS_TOKEN_SECRET=datdeptrai
```

run

```
yarn install
yarn dev
```

Open Browser: http://localhost:5000

##### For zing

```
Get Song: http://localhost:5000/api/zing/song?id={param-id-song}

Get Detail Playlist: http://localhost:5000/api/zing/detailplaylist?id={param-id-playlist}

Get Home: http://localhost:5000/api/zing/home?page={param-page}

Get Top 100: http://localhost:5000/api/zing/top100

Get Charthome: http://localhost:5000/api/zing/charthome

Get New Release Chart: http://localhost:5000/api/zing/newreleasechart

Get Info Song: http://localhost:5000/api/zing/infosong?id={param-id-song}

Get Artist: http://localhost:5000/api/zing/artist?name={param-name}

Get Artist Song: http://localhost:5000/api/zing/artistsong?name={param-id, page, count}

Get Lyric: http://localhost:5000/api/zing/lyric?id={param-id-song}

Search: http://localhost:5000/api/zing/search?keyword={keyword}

Get List MV: http://localhost:5000/api/zing/listmv?{id, page, count}

Get Categoty MV: http://localhost:5000/api/zing/categorymv?id={param-id-video}

Get Video: http://localhost:5000/api/zing/video?id={param-id-video}
```

##### For user:

```
Get Liked Song: http://localhost:5000/api/user/liked/song/${email}

Get Liked Album: http://localhost:5000/api/user/liked/album/${email

Add Liked Song: http://localhost:5000/api/user/liked/song/add?email=${email}&song=${song}

Add Liked Album: http://localhost:5000/api/user/liked/album/add?email=${email}&song=${song}

Remove Liked Song: http://localhost:5000/api/user/liked/song/add?email=${email}&songId=${songId}

Remove Liked Album: http://localhost:5000/api/user/liked/album/add?email=${email}&albumId=${albumId}
```

### Client

```
cd client
```

Create a new firebase project.[Login to your google account and create a new firebase project](https://console.firebase.google.com/u/0/)

Create an `.env` file and add the following variables.

```
REACT_APP_BASE_URL=http://localhost:5000
REACT_APP_BASE_URL_DEPLOY=https://zingmp3-dsy5.onrender.com
```

`run`

```
yarn install
yarn start
```

Open Browser: http://localhost:3000

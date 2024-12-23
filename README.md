### 🚀 Live Demo (https://ledat-zingmp3.vercel.app/)

![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot1.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot2.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot3.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot4.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot5.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot6.png)
![ZingMp3 screenshot](https://raw.githubusercontent.com/le-dat/zingmp3/master/static/screenshot7.png)



### 🔑 Key Features

- Play, pause, skip to the next or previous music track.
- Adjust the volume and seek through the audio.
- View the playlist of songs.
- Watch videos.
- Search for songs or artists.
- Change the background.
- Login or register using email or Google.
- Add or remove songs from favorites.
- To view real-time lyrics for audio,
### Prerequisites

- **Node.js** version > 18.0.0
- **Yarn** (preferred package manager)

---
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

#### 🏁 Run app in your browser (http://localhost:5000)

```bash
   yarn install && yarn dev
```

#### Enpoint for zing

Get Song: `/api/zing/song?id={param-id-song}`

Get Detail Playlist: `/api/zing/detailplaylist?id={param-id-playlist}`

Get Home: `/api/zing/home?page={param-page}`

Get Top 100: `/api/zing/top100`

Get Charthome: `/api/zing/charthome`

Get New Release Chart: `/api/zing/newreleasechart`

Get Info Song: `/api/zing/infosong?id={param-id-song}`

Get Artist: `/api/zing/artist?name={param-name}`

Get Artist Song: `/api/zing/artistsong?name={param-id, page, count`

Get Lyric: `/api/zing/lyric?id={param-id-song}`

Search: `/api/zing/search?keyword={keyword}`

Get List MV: `/api/zing/listmv?{id, page, count}`

Get Categoty MV: `/api/zing/categorymv?id={param-id-video}`

Get Video: `/api/zing/video?id={param-id-video}`

##### Enpoint for user:

Get Liked Song: `/api/user/liked/song/${email}`

Get Liked Album: `/api/user/liked/album/${email`

Add Liked Song: `/api/user/liked/song/add?email=${email}&song=${song}`

Add Liked Album: `/api/user/liked/album/add?email=${email}&song=${song}`

Remove Liked Song: `/api/user/liked/song/add?email=${email}&songId=${songId}`

Remove Liked Album: `/api/user/liked/album/add?email=${email}&albumId=${albumId}`

### Client

```
cd client

```

Create a new firebase project.[Login to your google account and create a new firebase project](https://console.firebase.google.com/u/0/)

#### 🏁 Run app in your browser (http://localhost:3000)

```bash
   yarn install && yarn start:dev
```

## Author

### Le Quoc Dat

Passionate software developer with a knack for creating efficient and user-friendly applications. Dedicated to continuous learning and improvement, always exploring new technologies and methodologies.

- **Portfolio:** [Website Portfolio](https://ledat-portfolio.vercel.app/)
- **GitHub:** [Le Quoc Dat](https://github.com/le-dat)
- **LinkedIn:** [Le Quoc Dat](https://www.linkedin.com/in/le-quoc-dat)

Feel free to reach out for collaboration or any inquiries!

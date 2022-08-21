let musics = [
  {
    name: "Bad Liar",
    artist: "Imagine Dragons",
    audioSrc: "songs/Imagine Dragons - Bad Liar (Official Music Video).mp3 ",
    imageSrc: "images/bad liar.jpg",
  },
  {
    name: "Chitta",
    artist: "Manan Bhardwaj",
    audioSrc: "songs/Chitta - Shiddat.mp3",
    imageSrc: "images/chitta-song-shiddat.jpg",
  },
  {
    name: "Blank Space",
    artist: "Taylor Swift",
    audioSrc: "songs/Taylor Swift - Blank Space.mp3 ",
    imageSrc: "images/blank space.jpg",
  },
  {
    name: "Sugar",
    artist: "Maroon 5",
    audioSrc: "songs/Maroon 5 - Sugar (Official Music Video).mp3 ",
    imageSrc: "images/sugar.jpg",
  },
  {
    name: "Hymn for the weekend",
    artist: "Coldplay",
    audioSrc: "songs/Coldplay - Hymn For The Weekend (Official Video).mp3 ",
    imageSrc: "images/hymn for the weekend.jpg",
  },
];

for (let i = 0; i < musics.length; i++) {
  let tile = document.createElement("div");
  tile.classList.add("tile");

  let thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");

  let img = document.createElement("img");
  img.src = musics[i].imageSrc;

  thumbnail.append(img);
  tile.append(thumbnail);

  let description = document.createElement("div");
  description.classList.add("description");

  let h2 = document.createElement("h2");
  h2.append(musics[i].name);
  description.append(h2);

  let h3 = document.createElement("h3");
  h3.append(musics[i].artist);
  description.append(h3);

  tile.append(description);

  tile.addEventListener("click", function () {
    playMusic(musics[i]);
  });

  document.querySelector(".music-list").append(tile);
}

function playMusic(music) {
  document.querySelector(".player").style.marginLeft = "0";
  document.querySelector(".main-thumbnail-img").src = music.imageSrc;
  document.querySelector(".song-name").innerText = music.name;
  document.querySelector(".song-artist").innerText = music.artist;
  document.querySelector(".audio").src = music.audioSrc;
  document.querySelector(".audio").play();
}

function closePlayer() {
  document.querySelector(".player").style.marginLeft = "100%";
  document.querySelector(".audio").pause();
}

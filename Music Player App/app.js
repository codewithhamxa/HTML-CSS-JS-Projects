const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
let total_duration = document.getElementById("duration");
let total_currentTime = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

const songs = [
    {
        name: "music-1",
        title: "Aur Kya Chahiye",
        artist: "Arjit Singh",
    },
    {
        name: "music-2",
        title: "Pasoori nu",
        artist: "Arjit Singh",
    },
    {
        name: "music-3",
        title: "Tu Aake Deekle",
        artist: "The King",
    },
    {
        name: "music-4",
        title: "Prada",
        artist: "Jass Manak",
    },
    {
        name: "music-5",
        title: "Bad Munda",
        artist: "Jass Manak",
    },
    {
        name: "music-6",
        title: "Kahani Suno",
        artist: "Kaifi Khalil",
    },
    {
        name: "music-7",
        title: "Dill jlany ki baat",
        artist: "Atif Aslam",
    },
    {
        name: "music-8",
        title: "Rangreza",
        artist: "Atif Aslam",
    },
    {
        name: "music-9",
        title: "Lut gayee",
        artist: "Jubin Nutiyal",
    },
    {
        name: "music-10",
        title: "Tum hi ana",
        artist: "Jubin Nutiyal",
    },
]

let isplaying = false;
// For Play
const playMusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
};
// For Pause
const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    isplaying ? pauseMusic() : playMusic();
});

// Change the music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    img.src = "images/" + songs.name + ".jpg";
}

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

// progressJs Work

music.addEventListener('timeupdate', (e) =>{
    const {currentTime, duration} = e.srcElement;
    let progress_time = (currentTime/duration)*100;
    progress.style.width = `${progress_time}%`;

    // music duration update
    let min_duration = Math.floor(duration/60);
    let sec_duration = Math.floor(duration%60);

    let tot_duration = `${min_duration}:${sec_duration}`;
    if(duration){
        total_duration.textContent = `${tot_duration}`;
    }

    // Current duration update
    let min_currentTime = Math.floor(currentTime/60);
    let sec_currentTime = Math.floor(currentTime%60);
    if(sec_currentTime < 10){
        sec_currentTime = `0${sec_currentTime}`
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    total_currentTime.textContent = `${tot_currentTime}`;
});

progress_div.addEventListener('click', (e) =>{
    const {duration} = music;
    let move_progress = (e.offsetX / e.srcElement.clientWidth)*duration;
    music.currentTime = move_progress;
})

music.addEventListener('ended' , nextSong)
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);

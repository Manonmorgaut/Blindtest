// ?? The following is not working:why?
// import {songArray} from "./Songs-array";

// This is not working, trying to import specific playlist based on their URI
// https://developer.spotify.com/console/get-playlist/?playlist_id=59ZbFPES4DQwEjBpWHzrtC&user_id=spotify&fields=fields%3Dhref%2Cname%2Cowner%28%21href%2Cexternal_urls%29%2Ctracks.items%28added_by.id%2Ctrack%28name%2Chref%2Calbum%28name%2Chref%29%29%29

// axios
//     .get("/https://api.spotify.com/v1/playlists/spotify%3Aplaylist%3A4Kz5uKF1j61cAgvrJVlKhr?market=ES&fields=items(added_by.id%2Ctrack(name%2Chref%2Calbum(name%2Chref)))")
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((err) => {
//       console.error(err);
//     });

// Initialize classes
class Timer {
  constructor(gameDuration) {
    this.currentTime = gameDuration;
    this.intervalId = 0;
  }
  startTimer(callback) {
    this.intervalId = setInterval(() => {
      for (let i = gameDuration; i > 0; i--) {
        console.log(i);
      }
    }, 1000);
  }
  getMinutes() {
    return Math.round(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number < 10) return (number = `0${number}`);
  }
  stopTimer() {
    clearInterval(this.intervalId);
  }
  resetTimer() {
    this.currentTime = gameDuration;
  }
}
// Initialize arrays
const songArray = [
  {
    title: "711",
    artist: "Beyonce",
    linktosong: "/beyonce-711.mp3",
  },
  {
    title: "Crazy in love",
    artist: "Test",
    linktosong: "/beyonce-crazy-in-love-ft-jay-z.mp3",
  },
  {
    title: "Who run the world girls",
    artist: "Beyonce",
    linktosong: "/beyonce-run-the-world-girls-video-main-version.mp3",
  },
  {
    title: "Single ladies",
    artist: "Beyonce",
    linktosong: "/beyonce-single-ladies-put-a-ring-on-it-video-version.mp3",
  },
];

const levels = [
  {
    level: 1,
    levelName: "",
    color: "blue",
    autoplayDuration: 20000,
    gameTime: 90000,
    textHint: true,
    videoHint: true,
    nbOfLives: 4,
  },
  {
    level: 2,
    levelName: "",
    color: "green",
    autoplayDuration: 10000,
    gameTime: 60000,
    textHint: false,
    videoHint: true,
    nbOfLives: 3,
  },
  {
    level: 3,
    levelName: "",
    color: "pink",
    autoplayDuration: 5000,
    gameTime: 30000,
    textHint: false,
    videoHint: false,
    nbOfLives: 2,
  },
];

// Initialize constants
const submitBtn = document.getElementById("submit-button");
const answer = document.getElementById("answer");
const result = document.getElementById("result");
const audioPlayer = document.getElementById("audio-player");
const points = document.getElementById("point-count");
const levelHeader = document.getElementById("level");
const categoryHeader = document.getElementById("category-name");
const timerOutput = document.getElementById("timerOutput");
const playlist = document.getElementById("playlist");
const listOfSongs = document.getElementById("list-of-songs");

var index = 0;
var nbOfPoints = 0;
var level = 1;
var levelAutoplayDuration = 20000;
var gameDuration = levels[level - 1].gameTime;
const timer = new Timer(gameDuration);
// var timer = new Timer();

function printTime() {
  let minutes = timer.getMinutes();
  let seconds = timer.getSeconds();
  minutes = timer.twoDigitsNumber(minutes);
  seconds = timer.twoDigitsNumber(seconds);
  console.log(minutes, seconds);
  timerOutput.innerHTML = `${minutes}:${seconds}`;
}

// Function that limits the duration of the music being played to 15 seconds

setTimeout(function () {
  audioPlayer.play();

  setTimeout(function () {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }, levelAutoplayDuration);
}, 1000);

// Define the function that starts the timer

function startGame() {
  timer.startTimer(printTime());
}

// Define the function that goes to the next song
function nextSong(arr) {
  index++;
  const song = arr[index];
  const previousSong = arr[index - 1];
  console.log("check: GO TO NEXT SONG LOGGED");
  audioPlayer.src = `${song.linktosong}`;
  // ?? The following keeps erasing the result innerHTML even though it's set to be launched 5 seconds later
  // with set timeout line 205
  result.innerHTML = "";
  // ?? The following doesnt print title and artist and erases points
  // playlist.innerHTML += '<p class = "song-artist"> ${previousSong.artist}</p>
  // <p class = "song-title"> ${previousSong.title}</p>';
}

// Define the function that goes to the next level (increments level, toggles classList for header,
// changes autoplay duration)

function goToNextLevel() {
  console.log("check: GO TO NEXT LEVEL LOGGED");
  level++;
  submitBtn.innerHTML = "Next level";
  categoryHeader.classList.toggle(`level${level}`);
  timer.resetTimer();
  levelAutoplayDuration = levels[level].autoplayDuration;
  timer.startTimer(printTime());
}

// Define the function that checks the answers and prints the result and nuber of points
// and then goes to next level or next song

function checkAnswers(arr) {
  console.log("check: CHECK ANSWERS LOGGED");

  // DEFINE CONSTANTS
  const song = arr[index];
  const artist = song.artist;
  const title = song.title;

  // IF HAS BOTH ARTIST AND TITLE GIVES 2POINTS
  if (answer.value.includes(artist) && answer.value.includes(title)) {
    result.innerHTML += `<p> You won 2 points!</p>`;
    nbOfPoints += 2;
    if (index + 1 === arr.length) {
      goToNextLevel();
    } else setTimeout(nextSong(arr), 5000);
  }

  // IF HAS EITHER ARTIST OR TITLE GIVES 1POINT
  else if (answer.value.includes(artist) || answer.value.includes(title)) {
    result.innerHTML = `<p> You won 1 point!</p>`;
    console.log(result);
    nbOfPoints++;
    if (index + 1 === arr.length) {
      goToNextLevel();
    } else setTimeout(nextSong(arr), 5000);
  }

  // IF HAS NEITHER ARTIST NOR TITLE CAN TRY AGAIN
  else {
    result.innerHTML += `<p> Try again!</p>`;
    answer.value = "";
  }
  points.textContent = `${nbOfPoints} points`;
}

// Track the clicks on the submit button to launch the function that checks answers (above)

submitBtn.onclick = (event) => {
  event.preventDefault();
  console.log("The onclick worked");
  // !! The following parameter needs to be changed once the spotify playlists are imported
  checkAnswers(songArray);
};

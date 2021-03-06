const main = document.getElementById("main");
const testAxiosBtn = document.getElementById("testaxios");

// ------------------------------------------------------------------//

// import { Timer } from "./timer-class.js";
// import { songArray } from "./arrays.js";
// import { levels } from "./arrays.js";
// import { pageLoader } from "./pageloader.js";

// import { timerBar } from "./timerbar.js";

//  ?? Define the function that shows a specific HTML file in the body of Main.html

function pageLoader(filename) {
  axios
    .get(`./${filename}.html`)
    .then((response) => {
      main.innerHTML = response.data;
      console.log(response);
      if (filename === "startgame") loadStartGamePage();
      if (filename === "game") loadMainGamePage();
    })
    .catch((err) => {
      console.error(err);
    });
}

// Define the function that shows startpage

pageLoader("startgame");

function loadStartGamePage() {
  const startGameBtn = document.getElementById("startgame");
  startGameBtn.onclick = (event) => {
    console.log("The game was started");
    startGame(songArray);
  };
  // Define the function that starts the game

  function startGame(arr) {
    pageLoader("game");
    const song = arr[index];
    timer.startTimer(printTime, goToNextLevel, goToResultsPage);
    audioPlayer.src = `${song.linktosong}`;
  }

  const songArray = [
    {
      title: "Smells like teen spirit",
      artist: "Nirvana",
      // linktosong: "./Songs/nirvana-smells-like-teen-spirit-official-music-video.mp3",
      linktovideoclip:
        "./Video clips/nirvana-smells-like-teen-spirit-official-music-video.mp4",
    },
    {
      title: "Californication",
      artist: "Red hot chili peppers",
      // linktosong: "./Songs/red-hot-chili-peppers-californication-official-music-video.mp3",
      linktovideoclip:
        "./Video clips/red-hot-chili-peppers-californication-official-music-video.mp4",
    },
    {
      title: "The house of the rising sun",
      artist: "The animals",
      // linktosong: "./Songs/the-animals-the-house-of-the-rising-sun-1964-high-quality.mp3",
      linktovideoclip:
        "./Video clips/the-animals-the-house-of-the-rising-sun-1964-high-quality.mp4",
    },
    {
      title: "Sultans of swing",
      artist: "Dire straits",
      // linktosong: "./Songs/sultans-of-swing.mp3",
      linktovideoclip: "./Video clips/dire-straits-sultans-of-swing.mp4",
    },
    {
      title: "Start me up",
      artist: "Rolling stones",
      // linktosong: "./Songs/the-rolling-stones-start-me-up-official-promo.mp3",
      linktovideoclip:
        "./Video clips/the-rolling-stones-start-me-up-official-promo.mp4",
    },
    {
      title: "London calling",
      artist: "The clash",
      // linktosong: "./Songs/the-clash-london-calling-official-video.mp3",
      linktovideoclip:
        "./Video clips/the-clash-london-calling-official-video.mp4",
    },
    {
      title: "Don't stop believin",
      artist: "The journey",
      // linktosong: "./Songs/journey-dont-stop-believin-audio.mp3",
      linktovideoclip:
        "./Video clips/journey-dont-stop-believin-live-in-houston.mp4",
    },
    {
      title: "Rich girls",
      artist: "The virgin",
      // linktosong: "./Songs/the-virgins-rich-girls-official-video.mp3",
      linktovideoclip:
        "./Video clips/the-virgins-rich-girls-official-video.mp4",
    },
  ];

  class Timer {
    constructor(gameDuration) {
      this.currentTime = gameDuration;
      this.intervalId = null;
    }
    startTimer(callback, callback2, callback3) {
      this.intervalId = setInterval(() => {
        console.log(this.currentTime);
        this.currentTime--;
        callback();
        if (this.currentTime === 0) {
          if (level === levels.length - 1) {
            this.stopTimer();
            console.log("endofgame");
            callback3();
          } else {
            this.stopTimer();
            callback2();
          }
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
      if (number < 10) return `0${number}`;
      else return number;
    }
    stopTimer() {
      clearInterval(this.intervalId);
    }
    resetTimer(newDuration) {
      this.currentTime = newDuration;
    }
  }

  const levels = [
    {
      level: 1,
      levelName: "",
      color: "blue",
      autoplayDuration: 20000,
      gameTime: 10,
      textHint: true,
      videoHint: true,
      nbOfLives: 4,
    },
    {
      level: 2,
      levelName: "",
      color: "green",
      autoplayDuration: 10000,
      gameTime: 10,
      textHint: false,
      videoHint: true,
      nbOfLives: 3,
    },
    {
      level: 3,
      levelName: "",
      color: "pink",
      autoplayDuration: 5000,
      gameTime: 10,
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
  const letterHintBtn = document.getElementById("letter-hint-button");
  const videoHintBtn = document.getElementById("video-hint-button");
  const letterHint = document.getElementById("letter-hint");
  const videoHint = document.getElementById("video-hint");
  const videoPlayer = document.getElementById("video-player");
  const lives = document.getElementById("lives");
  const totalPoints = document.getElementById("total-points");
  const results = document.getElementById("results");

  var index = 0;
  var nbOfPoints = 0;
  var level = 0;
  var nbOfLives = levels[level].nbOfLives;
  var levelAutoplayDuration = levels[level].autoplayDuration;
  var gameDuration = levels[level].gameTime;
  const timer = new Timer(gameDuration);

  function printTime() {
    let minutes = timer.getMinutes();
    let seconds = timer.getSeconds();
    minutes = timer.twoDigitsNumber(minutes);
    seconds = timer.twoDigitsNumber(seconds);
    console.log(minutes, seconds);
    timerOutput.innerHTML = `<p id="timer">Time left: ${minutes}:${seconds}!</p>`;
  }

  // Function that limits the duration of the music being played to 15 seconds

  setTimeout(function () {
    audioPlayer.play();

    setTimeout(function () {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }, levelAutoplayDuration);
  }, 1000);

  // Define the function that goes to the next song
  function nextSong(arr) {
    setTimeout(function () {
      console.log("check: GO TO NEXT SONG LOGGED");
      index++;
      const song = arr[index];
      const previousSong = arr[index - 1];
      audioPlayer.src = `${song.linktosong}`;
      listOfSongs.innerHTML += `<p id = "song-artist"> ${previousSong.artist}</p>
        <p id = "song-title"> ${previousSong.title}</p>`;
      result.textContent = "";
      letterHint.innerHTML = "";
      videoHint.innerHTML = "";
      answer.value = "";
    }, 2000);
  }

  // Define the function that goes to the next level (increments level, toggles classList for header,
  // changes autoplay duration)

  function goToNextLevel() {
    console.log("check: GO TO NEXT LEVEL LOGGED");
    level++;
    // ?? The following isnt working!!
    categoryHeader.classList.toggle(`level${level}`);
    gameDuration = levels[level].gameTime;
    levelAutoplayDuration = levels[level].autoplayDuration;
    timer.resetTimer(gameDuration);
    timer.startTimer(printTime, goToNextLevel, goToResultsPage);
  }

  // Define the function that will decide what to do when wrong answer
  function wrongAnswer(arr) {
    if (nbOfLives === 0) {
      if (level === levels.length - 1) {
        console.log("gameover");
        alert("GAME OVER");
        goToResultsPage();
      } else {
        result.textContent = `You're out of lives for the game, moving to the next song!`;
        console.log('It should go to next song now');
        nextSong(arr);
        console.log('on the following array', arr);
      }
    } else {
      result.textContent = `Try again!`;
      nbOfLives--;
      for (let i = 0; i < nbOfLives; i++) {
        lives.innerHTML += `<i class="fa fa-heart fa-2x"></i>`;
        console.log(i);
      }
      answer.value = "";
    }
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
      result.textContent = `You won 2 points!`;
      updatePoints(2);
      nextSong(arr);
    }

    // IF HAS EITHER ARTIST OR TITLE GIVES 1POINT
    else if (answer.value.includes(artist) || answer.value.includes(title)) {
      console.log("the result should log for 1 point");
      result.textContent = `You won 1 point!`;
      console.log(result);
      updatePoints(1);
      nextSong(arr);
    }

    // IF HAS NEITHER ARTIST NOR TITLE CAN TRY AGAIN
    else {
      wrongAnswer(arr);
    }
  }

  // Track the clicks on the submit button to launch the function that checks answers (above)
  // How to duplicate the following to happen when pressing enter in the answer bar?

  submitBtn.onclick = (event) => {
    event.preventDefault();
    console.log("The onclick worked");
    // !! The following parameter needs to be changed once the spotify playlists are imported
    checkAnswers(songArray);
  };

  // Define the function that show 3 first letters of artist name

  function printLetterHint(arr) {
    const song = arr[index];
    const artist = song.artist;
    letterHint.innerHTML = `<p>The first 3 letters of the artist name are</p>
      <p id="hint-style">${artist[0]}${artist[1]}${artist[2]}</p>`;
  }

  // Define the function that shows 10 seconds of the videoclip
  function showVideoHint(arr) {
    const song = arr[index];
    videoHint.innerHTML = `<video id="video-player" controls width="250" autoplay>
    <source src=${song.linktovideoclip}
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
    </video>`;
  }

  function autoplayVideoHint() {
    setTimeout(function () {
      videoPlayer.play();

      setTimeout(function () {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
      }, 10000);
    }, 1000);
  }

  // Define the function that updates the nb of points
  function updatePoints(x) {
    console.log("points are gonna be updated by", x);
    nbOfPoints += x;
    points.textContent = `${nbOfPoints} points`;
  }

  // Displays the hints and substracts 1 point when clicking on hint buttons

  letterHintBtn.onclick = () => {
    console.log("The letter hint btn was clicked");
    printLetterHint(songArray);
    updatePoints(-1);
  };
  videoHintBtn.onclick = () => {
    console.log("The video hint btn was clicked");
    showVideoHint(songArray);
    autoplayVideoHint();
    updatePoints(-1);
  };
}

// Define the function that foes to main game page

function loadMainGamePage() {

}

// // Define the function that goes to the results page
function goToResultsPage() {
  pageLoader("results");
}

//   Define the test function to get the game running

// testAxiosBtn.onclick = (event) => {
//   console.log("The game was started");
//   startGame(songArray);
// };

// //  Define the function that will print results on the result page

// // ?? The following isn't working

// function displayResults() {
//       totalPoints.textContent=${nbOfPoints};
//   }
//   displayResults();

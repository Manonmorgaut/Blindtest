

const quotesArray = [
  {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
  },
  {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
  },
  {
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
  },
  {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
  },
  {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
  },
  {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
  },
  {
    "text": "Well begun is half done.",
    "author": "Aristotle"
  },
  {
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
  },
  {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
  },
  {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha"
  },
  {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer"
  },
  {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
  },
  {
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark"
  },
  {
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer"
  },
  {
    "text": "Today is the tomorrow we worried about yesterday.",
    "author": null
  },
  {
    "text": "It's easier to see the mistakes on someone else's paper.",
    "author": null
  }
]
class Timer {
  constructor(gameDuration) {
    this.currentTime = gameDuration;
    this.intervalId = null;
  }
  startTimer(callback, callback2,callback3) {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime--;
      callback();
      if (this.currentTime === 0) 
      {
        if (level === levels.length-1) 
        {
          this.stopTimer();
          console.log("endofgame");
          callback3();
        }
        else {this.stopTimer();
        callback2();}
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
    if (number < 10) return `0${number}`
    else return number;
  }
  stopTimer() {
    clearInterval(this.intervalId);
  }
  resetTimer(newDuration) {
    this.currentTime = newDuration;
  }
}

const songArray = [
  {
    title: "Smells like teen spirit",
    artist: "Nirvana",
    // linktosong: "./Songs/nirvana-smells-like-teen-spirit-official-music-video.mp3",
    linktovideoclip: "./Video clips/nirvana-smells-like-teen-spirit-official-music-video.mp4",
  },
  {
    title: "Californication",
    artist: "Red hot chili peppers",
    // linktosong: "./Songs/red-hot-chili-peppers-californication-official-music-video.mp3",
    linktovideoclip: "./Video clips/red-hot-chili-peppers-californication-official-music-video.mp4",
  },
  {
    title: "The house of the rising sun",
    artist: "The animals",
    // linktosong: "./Songs/the-animals-the-house-of-the-rising-sun-1964-high-quality.mp3",
    linktovideoclip: "./Video clips/the-animals-the-house-of-the-rising-sun-1964-high-quality.mp4",
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
    linktovideoclip: "./Video clips/the-rolling-stones-start-me-up-official-promo.mp4",
  },
  {
    title: "London calling",
    artist: "The clash",
    // linktosong: "./Songs/the-clash-london-calling-official-video.mp3",
    linktovideoclip: "./Video clips/the-clash-london-calling-official-video.mp4",
  },
  {
    title: "Don't stop believin",
    artist: "The journey",
    // linktosong: "./Songs/journey-dont-stop-believin-audio.mp3",
    linktovideoclip: "./Video clips/journey-dont-stop-believin-live-in-houston.mp4",
  },
  {
    title: "Rich girls",
    artist: "The virgin",
    // linktosong: "./Songs/the-virgins-rich-girls-official-video.mp3",
    linktovideoclip: "./Video clips/the-virgins-rich-girls-official-video.mp4",
  }
];

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
const gameOver =document.getElementById("gameover");

var index = 0;
var nbOfPoints = 1;
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



// Define the function that starts the timer

function startGame(arr) {
  const song = arr[index];
  timer.startTimer(printTime, goToNextLevel,goToResultsPage);
  audioPlayer.src = `${song.linktosong}`;
}

startGame(songArray);

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
    listOfSongs.innerHTML += `<div id = "past-song"> <p id = "song-artist"> ${previousSong.artist}</p>
    <p id = "song-title"> ${previousSong.title}</p></div>`;
    let random = Math.floor(Math.random() * quotesArray.length);
    let quote = quotesArray[random].text;
    result.textContent = `${quote}`;
    letterHint.innerHTML = "";
    videoHint.innerHTML = "";
    answer.value = "";
    // timerBar();
  },2000);
};

// Define the function that goes to the next level (increments level, toggles classList for header,
// changes autoplay duration)

function goToNextLevel() {
  console.log("check: GO TO NEXT LEVEL LOGGED");
  level++;
  // 2 next lines not in main.js
  levelHeader.classList.toggle(`red`);
  levelHeader.innerHTML=`<p>Level ${level+1}</p>`
  gameDuration = levels[level].gameTime;
  levelAutoplayDuration = levels[level].autoplayDuration;
  timer.resetTimer(gameDuration);
  timer.startTimer(printTime,goToNextLevel,goToResultsPage);

}

// Define the function that will decide what to do when wrong answer
function wrongAnswer(arr) {
  if (nbOfLives === 0) {
      result.textContent = `You're out of lives for the game, moving to the next song!`;
      nextSong(arr);
    }
   else {
    result.textContent = `Try again!`;
    nbOfLives--;
    // ?? The following is not showing at all
    for (let i=0;i<nbOfLives;i++){
      lives.innerHTML += `<i class="fa fa-heart"></i>`;
      console.log(i);
    }
    answer.value = "";
  }
  results.classList.toggle("is-moving");
  console.log(result.classList);
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
    result.textContent = `You won 4 points!`;
    updatePoints(4);
    nextSong(arr);
  }

  // IF HAS EITHER ARTIST OR TITLE GIVES 1POINT
  else if (answer.value.includes(artist) || answer.value.includes(title)) {
    console.log("the result should log for 2 points")
    result.textContent = `You won 2 points!`;
    console.log(result);
    updatePoints(2);
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
  if(x>0) {
    points.classList.toggle("is-changing-size")
  };
  console.log("points are gonna be updated by", x);
  nbOfPoints += x;
  points.textContent = `${nbOfPoints} points`;
}

// Displays the hints and substracts 1 point when clicking on hint buttons

letterHintBtn.onclick = () => {
  console.log("The letter hint btn was clicked");
  printLetterHint(songArray);
  updatePoints(-0.5);
};
videoHintBtn.onclick = () => {
  console.log("The video hint btn was clicked");
  showVideoHint(songArray);
  autoplayVideoHint();
  updatePoints(-0.5);
};

// Define the gameover function


function printGameOver() {
  if(nbOfPoints<0) {
    console.log("gameover");
    alert("GAME OVER");
    goToResultsPage();
  }
}

// // Define the function that goes to the results page

// // ?? How to write the following?
function goToResultsPage() {
console.log('This should go to the results page');
gameOver.style.display="block";
gameOver.innerHTML=`<p> Your final score is </p>
<p>${nbofpoints} points</p>`
  }

  // Call game over function
// ?? Why is this not working? Appeler au moment opportun quand joueur intervient

// printGameOver();

// //  Define the function that will print results on the result page

// // ?? The following isn't working

// function displayResults() {
//       totalPoints.textContent=${nbOfPoints};
//   }
//   displayResults();

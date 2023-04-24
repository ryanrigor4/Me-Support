console.log("Script is running!");

let upArrow = document.getElementById("up");
let startButton = document.getElementById("startButton");
let downArrow = document.getElementById("down");
let displayedTime = document.getElementById("timer");

let currentTime = 600000;
let seconds;
let minutes;

function timeFormat(currentTime) {
  
  seconds = Math.floor((currentTime / 1000) % 60),
  minutes = Math.floor((currentTime / (1000 * 60)) % 60),

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

}

//variables to aid Functions
let placeHolder = 0;
let intervalHolder = 0;

function updateCounter() {

  timeFormat(currentTime);

  displayedTime.innerHTML = minutes + ":" + seconds;

}

function timer() {

  currentTime -= 1000;

  timeFormat(currentTime);

  updateCounter();
  
}

startButton.addEventListener("click", () => {

  click.play();

  if(placeHolder == 0) {
    meditationMusic.loop = true;
    meditationMusic.play().loop;

    startButton.innerText = "Stop";

    intervalHolder = setInterval(timer, 1000);
    placeHolder++;

  } else {

    meditationMusic.pause();

    startButton.innerText = "Start";

    clearInterval(intervalHolder);

    intervalHolder = null;
    placeHolder--;
    
  }
  
  updateCounter();

})

upArrow.addEventListener("click", () => {

  console.log("up")
  currentTime += 30000;
  updateCounter();
  
});

downArrow.addEventListener("click", () => {

  console.log("down")
  currentTime -= 30000;
  updateCounter();
  
});

//audio

let rainNoises = document.getElementById("rainNoises");
let oceanNoises = document.getElementById("oceanNoises");
let fireNoises = document.getElementById("fireNoises");
let whiteNoise = document.getElementById("whiteNoise")

//on click
const click = new Audio();

click.src = "click.mp3";

let meditationMusic = new Audio();

//dropdown functionality
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

//rain noises
rainNoises.addEventListener('click', () => {

  console.log("Rain set as Meditation Noise");

  meditationMusic.src = "rain.mp3";
  
})

//ocean noises
oceanNoises.addEventListener('click', () => {

  console.log("Ocean set as Meditation Noise");

  meditationMusic.src = "ocean.mp3";
  
})

//fire noises


fireNoises.addEventListener('click', () => {

  console.log("Fire set as Meditation Noise");

  meditationMusic.src = "fire.mp3";
  
})

//white noise

whiteNoise.addEventListener('click', () => {

  console.log("White Noise set as Meditation Noise");

  meditationMusic.src = "whiteNoise.mp3";
  
})

//sosa

keef.addEventListener('click', () => {

  console.log("Chief Keef Sosa set as Meditation Noise");

  meditationMusic.src = "sosa.mp3";
  
})
var myAudio = document.getElementById("player");
var playButton = document.getElementById("play-button");
var progressBar = document.getElementById("audio-progress");
var percentLoaded = document.getElementById("percent-loaded");
var pin = document.getElementById("audio-slider");

var percent;
function togglePlayPause() {
  var playIcon = document.getElementById("play-icon");
  if (myAudio.paused) {
    if (myAudio.ended) {
      playIcon.classList.remove("far", "fa-pause-circle");
      playIcon.classList.add("far", "fa-play-circle");
      console.log(myAudio.ended);
      updateProgress(myAudio.paused);
    } else {
      playIcon.classList.remove("far", "fa-play-circle");
      playIcon.classList.add("far", "fa-pause-circle");
      myAudio.play();
      console.log("Audio is started");
      updateProgress(myAudio.paused);
    }
  } else if (myAudio.play) {
    myAudio.pause();
    playIcon.classList.remove("far", "fa-pause-circle");
    playIcon.classList.add("far", "fa-play-circle");
    console.log("Audio is stopped");
    updateProgress(myAudio.paused);
  }
}

var startTracking;
function updateProgress(isPaused) {
  var myAudio = document.getElementById("player");
  var currentTime = myAudio.currentTime;
  var songDuration = myAudio.duration;
  var progressBar = document.getElementById("audio-progress");
  var pin = document.getElementById("audio-slider");
  console.log("tracking start");
  if (!isPaused) {
    startTracking = setInterval(function name(params) {
      currentTime = myAudio.currentTime;
      percent = currentTime * 100 / songDuration + "%";
      progressBar.style.width = percent;
      pin.style.left = percent;
      
    }, 1000);
  } else {
    clearInterval(startTracking);
  }
}

playButton.addEventListener("click",togglePlayPause);
myAudio.addEventListener("ended",togglePlayPause);

percentLoaded.addEventListener("click", function(event) {
  mouseMovePin(event);
});

function updateProgress(percent) {
  var audioTime = percent * myAudio.duration / 100;
  console.log("audio time: " + audioTime);

  myAudio.currentTime = audioTime;
}

pin.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mouseUp);

var onPin = false;

function mouseDown(event) {
  window.addEventListener("mousemove", mouseMovePin);
  onPin = true;
  console.log("pin on hold");
}
function mouseUp() {
  if (onPin == true) {
    updateProgress(percent);
    window.removeEventListener("mousemove", mouseMovePin);
    console.log("mousemove removed");
  }
  onPin = false;
}
function mouseMovePin(event) {
  var newWidth = event.clientX - percentLoaded.getBoundingClientRect().left; // mouse position
  var percentLoadedWidth = percentLoaded.offsetWidth;
  console.log("mouse position: " + newWidth);

  if (newWidth > 0 && newWidth < percentLoadedWidth) {
    percent = newWidth * 100 / percentLoadedWidth;
    progressBar.style.width = percent + "%";
    pin.style.left = percent + "%";
  } else {
    if (newWidth < 0) {
      progressBar.style.width = "0%";
      pin.style.left = "0%";
    } else if (newWidth > percentLoadedWidth) {
      progressBar.style.width = "100%";
      pin.style.left = "100%";
    }
  }
}

function getPosition(el) {
  return el.getBoundingClientRect().left;
}

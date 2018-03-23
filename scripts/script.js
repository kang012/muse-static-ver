var myAudio = document.getElementById("player");
function togglePlayPause() {
  var playButton = document.getElementById("play-button");
  var sliderStart;
  if (myAudio.paused) {
    if (myAudio.ended) {
      playButton.classList.remove("far", "fa-pause-circle");
      playButton.classList.add("far", "fa-play-circle");
      console.log(myAudio.ended);
      updateProgress(myAudio.paused);
    } else {
      playButton.classList.remove("far", "fa-play-circle");
      playButton.classList.add("far", "fa-pause-circle");
      myAudio.play();
      console.log("Audio is started");
      updateProgress(myAudio.paused);
    }
  } else if (myAudio.play) {
    myAudio.pause();
    playButton.classList.remove("far", "fa-pause-circle");
    playButton.classList.add("far", "fa-play-circle");
    console.log("Audio is stopped");
    updateProgress(myAudio.paused);
  }
}
function trackingPlayer() {
  var myAudio = document.getElementById("player");
  var currentTime = myAudio.currentTime;
  var songDuration = myAudio.duration;
  var percent;

  currentTime = myAudio.currentTime;
  songDuration = myAudio.duration;
  percent = currentTime * 100 / songDuration + "%";
  console.log(percent);

  return percent;
}

var startTracking;
function updateProgress(isPaused) {
  var myAudio = document.getElementById("player");
  var currentTime = myAudio.currentTime;
  var songDuration = myAudio.duration;
  var progressBar = document.getElementById("audio-progress");
  var pin = document.getElementById("audio-slider");

  if (!isPaused) {
    startTracking = setInterval(function name(params) {
      currentTime = myAudio.currentTime;
      var percent = currentTime * 100 / songDuration + "%";
      progressBar.style.width = percent;
      pin.style.left = percent;
      console.log(percent);
    }, 1000);
  } else {
    clearInterval(startTracking);
  }
}

var percentLoaded = document.getElementById("percent-loaded");

percentLoaded.addEventListener("click", function(event) {
  var newWidth = event.clientX - event.target.getBoundingClientRect().left;

  var progressBar = document.getElementById("audio-progress");
  var pin = document.getElementById("audio-slider");
  var percentNum = ((newWidth * 100) / percentLoaded.offsetWidth);
  var percent = percentNum + "%";
  var audioTime = (percentNum * myAudio.duration)/100;

  progressBar.style.width = percent;
  pin.style.left = percent;

  myAudio.currentTime = audioTime;

});

function togglePlayPause() {
  var myAudio = document.getElementById("player");
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
      updateProgress(!myAudio.paused);
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

// function updateProgress(isPlaying) {
//   var progressBar = document.getElementById("audio-progress");
//   var pin = document.getElementById("audio-slider");
//   var percent;
//   var start;
//   if (isPlaying) {
//     start = setInterval(function name() {
//       percent = trackingPlayer();
//       progressBar.style.width = percent;
//       progressBar.style.left = percent;
//     }, 1000);
//   } else {
//     clearInterval(start);
//   }
// }

function updateProgress(isPlaying) {
  var myAudio = document.getElementById("player");
  var currentTime = myAudio.currentTime;
  var songDuration = myAudio.duration;
  var progressBar = document.getElementById("audio-progress");
  var pin = document.getElementById("audio-slider");
  var start;


  if (isPlaying) {
    
    start = setInterval(function name(params) {
      currentTime = myAudio.currentTime;
      var percent = currentTime * 100 / songDuration + "%";
      progressBar.style.width = percent;
      pin.style.left = percent;
    },1000)
  } else {
    clearInterval(start);
  }
}

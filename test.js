function togglePlayPause() {
  var myAudio = document.getElementById("player");
  var playButton = document.getElementById("play-button");

  if (myAudio.paused) {
    if (myAudio.ended) {
      playButton.classList.remove("far", "fa-pause-circle");
      playButton.classList.add("far", "fa-play-circle");
      console.log(myAudio.ended);
    } else {
      playButton.classList.remove("far", "fa-play-circle");
      playButton.classList.add("far", "fa-pause-circle");
      myAudio.play();
    }
  } else if (myAudio.play) {
    myAudio.pause();
    playButton.classList.remove("far", "fa-pause-circle");
    playButton.classList.add("far", "fa-play-circle");
  }
}
function trackingPlayer() {
  console.log("Audio is playing");
  var myAudio = document.getElementById("player");
  var progressBar;
  var pin;
  var currentTime = myAudio.currentTime;
  var songDuration = myAudio.duration;
  var temp;

  while (!myAudio.paused) {
    // progressBar = document.getElementById("audio-progress");
    // pin = document.getElementById("audio-slider");
    currentTime = myAudio.currentTime;
    songDuration = myAudio.duration;
    temp = (currentTime * 100 / songDuration) + "%";
    console.log(temp);
  }
}

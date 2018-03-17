

function togglePlayPause(){   
    var myAudio = document.getElementById("player");
    var playButton = document.getElementById("play-button");

    if(myAudio.paused){
        playButton.classList.remove("far","fa-play-circle");
        playButton.classList.add("far","fa-pause-circle")
        myAudio.play();
    }else{
        myAudio.pause();
        playButton.classList.remove("far","fa-pause-circle");
        playButton.classList.add("far","fa-play-circle")
    }
}

console.log("test");

'use strict'

const musicFile = new Audio('music.mp3')
const cassette = document.querySelector('.cassette')


musicFile.volume = 0.3


function clickEffect(ele) {
  ele.style.transform = "scale(0.994)"
  setTimeout(() => ele.style.transform = "", 200);
}


cassette.onclick = () => {
  musicFile.paused ? musicFile.play() : musicFile.pause()
  clickEffect(cassette)
}





const button = document.querySelector("button");

button.onclick = () => {
  // Check if the Vibration API is supported
  if ("vibrate" in navigator) {
    // Vibrate for 100 milliseconds
    navigator.vibrate(200);
  } else {
    // Vibration API not supported
    console.log("Vibration not supported");
  }
};


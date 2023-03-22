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
  if ("vibrate" in navigator) {
    navigator.vibrate(1000);
    button.style.backgroundColor = '#0fda0f'
  } else {
    button.style.backgroundColor = '#ff2b2b'
  }
};


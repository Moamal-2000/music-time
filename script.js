'use strict'

const musicFile = new Audio('music.mp3')
const cd = document.querySelector('.cd')


musicFile.volume = 0.3


function clickEffect(ele) {
  ele.style.transform = "scale(0.994)"
  setTimeout(() => ele.style.transform = "", 200);
}


cd.onclick = () => {
  musicFile.paused ? musicFile.play() : musicFile.pause()
  clickEffect(cd)
}


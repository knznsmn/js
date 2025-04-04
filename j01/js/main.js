/*******************************************************

 Project name:             drum-kit
 Author:                   Julius Cinco Cesar
                           knznsmn@knznsmn.com
                           @knznsmn

 Date created:             March 23, 2025
                           21:23:29

*******************************************************/

// Function Hall
import { get_current_year } from "./modules/utils.js";
import { Keys } from "./modules/Keys.js";
import { Banner } from "./modules/Banner.js";

// UI
Banner();
Keys();

// Anchors
const ans = document.getElementById('ans');
ans.innerText = get_current_year();

function audioPlayer(s) {

  const waves = {
    a: new Audio('./assets/sounds/boom.wav'),
    s: new Audio('./assets/sounds/clap.wav'),
    d: new Audio("./assets/sounds/hihat.wav"),
    f: new Audio('./assets/sounds/kick.wav'),
    g: new Audio('./assets/sounds/openhat.wav'),
    h: new Audio('./assets/sounds/ride.wav'),
    j: new Audio('./assets/sounds/snare.wav'),
    k: new Audio('./assets/sounds/tink.wav'),
    l: new Audio('./assets/sounds/tom.wav'),
  };
  waves[s].currentTime = 0;
  waves[s].play();
  Keys[s].classList.add('playing');
}


document.addEventListener('click', (e) => {
  audioPlayer(e.target.id);
});
document.addEventListener('keydown', (e) => {
  audioPlayer(e.key);
});
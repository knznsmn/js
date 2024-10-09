// Element Bindings
const element = {
  footer: document.getElementsByTagName('footer')[0],
}
const keys = {
  q: document.getElementById('q'),
  w: document.getElementById('w'),
  e: document.getElementById('e'),
  a: document.getElementById('a'),
  s: document.getElementById('s'),
  d: document.getElementById('d'),
  j: document.getElementById('j'),
  k: document.getElementById('k'),
  l: document.getElementById('l'),
}

const sounds = {
  q: new Audio('./public/wav/boom.wav'),
  w: new Audio('./public/wav/clap.wav'),
  e: new Audio('./public/wav/hiha.wav'),
  a: new Audio('./public/wav/kick.wav'),
  s: new Audio('./public/wav/nare.wav'),
  d: new Audio('./public/wav/open.wav'),
  j: new Audio('./public/wav/ride.wav'),
  k: new Audio('./public/wav/tink.wav'),
  l: new Audio('./public/wav/tome.wav'),
}

// UI Components
function Footer() {
  const credit = document.createElement('p');
  credit.innerHTML = `<small>${new Date().getFullYear()}. knznsmn. All rights reversed.</small>`;
  element.footer.appendChild(credit);
}

// Function Hall
function playSound(e) {
  const sound = sounds[e];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
  else {
    console.log(`Unregistered ID: ${e}`);
  }
}
// MAIN()

// Listeners
document.addEventListener('keydown', (e) => {
  playSound(e.key)
});

document.addEventListener('click', (e) => {
  playSound(e.target.id);
})

Footer();
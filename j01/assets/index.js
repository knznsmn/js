// Selectors
const key = {
    A: document.getElementById('A'),
    S: document.getElementById('S'),
    D: document.getElementById('D'),
    F: document.getElementById('F'),
    G: document.getElementById('G'),
    H: document.getElementById('H'),
    J: document.getElementById('J'),
    K: document.getElementById('K'),
    L: document.getElementById('L'),
}

// Listeners
document.addEventListener('keydown', (e) => {
    let pressedKey = e.key.toUpperCase();
    playSound(pressedKey);

})

function playSound(l) {
    switch (l) {
        case 'A':
            const boom = new Audio('./assets/wav/boom.wav');
            boom.play();
            key.A.classList.add('pressed');
            break;
        case 'S':
            const clap = new Audio('./assets/wav/clap.wav');
            clap.play();
            key.S.classList.add('pressed');
            break;
        case 'D':
            const hihat = new Audio('./assets/wav/hihat.wav');
            hihat.play();
            key.D.classList.add('pressed');
            break;
        case 'F':
            const kick = new Audio('./assets/wav/kick.wav');
            kick.play();
            key.F.classList.add('pressed');
            break;
        case 'G':
            const openhat = new Audio('./assets/wav/openhat.wav');
            openhat.play();
            key.G.classList.add('pressed');
            break;
        case 'H':
            const ride = new Audio('./assets/wav/ride.wav');
            ride.play();
            key.H.classList.add('pressed');
            break;
        case 'J':
            const snare = new Audio('./assets/wav/snare.wav');
            snare.play();
            key.J.classList.add('pressed');
            break;
        case 'K':
            const tink = new Audio('./assets/wav/tink.wav');
            tink.play();
            key.K.classList.add('pressed');
            break;
        case 'L':
            const tom = new Audio('./assets/wav/tom.wav');
            tom.play();
            key.L.classList.toggle('pressed');
            break;
    }
}
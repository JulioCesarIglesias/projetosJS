document.body.addEventListener('keydown', (event) => {
    playSound(event.code.toLowerCase());    
});

document.querySelector('.composer button').addEventListener('click', (() => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');

        playComposition(songArray);
    }
}));

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement && keyElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 200);        
    }
}

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){   
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);        
        
        wait += 200;
    }
}
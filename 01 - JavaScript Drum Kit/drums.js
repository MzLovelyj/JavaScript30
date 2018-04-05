function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${ e.keyCode }"]`);
    const key = document.querySelector(`.key[data-key="${ e.keyCode }"]`);
    if (!audio) return; //stops the function from running all together
    audio.currentTime = 0; //rewinds from the start since just audio.play() wont play 
    //if you continue selecting the keydown buttons on screen
    audio.play();
    key.classList.add('playing');
    //annimation
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    //Skip if its not a transform
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
const pianoKeys = document.querySelectorAll('.key');
function playSound(soundUrl){
    new Audio(soundUrl).play()
}
pianoKeys.forEach((pianoKey, i)=> {
    const num = i<9 ? '0'+(i+1) : (i+1);
    const soundUrl = 'sounds/key'+num+'.ogg';
    pianoKey.addEventListener('click', () => playSound(soundUrl))
})
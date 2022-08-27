const pianoKeys = document.querySelectorAll('.key');
function playSound(soundUrl){
    const sound = new Audio(soundUrl)
    sound.currentTime = 0
    sound.play()
}
pianoKeys.forEach((pianoKey, i)=> {
    const num = i<9 ? '0'+(i+1) : (i+1);
    const soundUrl = 'sounds/key'+num+'.ogg';
    pianoKey.addEventListener('mousedown', ()=>playSound(soundUrl))
})
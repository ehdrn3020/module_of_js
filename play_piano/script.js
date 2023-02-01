const pianoKeys = document.querySelectorAll('.piano-keys .key');

// by default, a
let audio = new Audio("tunes/a.wav")
// let allKeys = [];

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    console.log(clickedKey);
    clickedKey.classList.add("active");
    // setTimeout(()=>{
    //     clickedKey.classList.remove("active");
    // }, 150);
}

pianoKeys.forEach(key => {
    // allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

// const pressedKey = (e) => {
//     playTune(e.key);
// }

// document.addEventListener("keydown", pressedKey);
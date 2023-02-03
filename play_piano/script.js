const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".show input")

// by default, a
let audio = new Audio("tunes/a.wav")

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();
}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    value = e.target.value/100;
    audio.volume = value;
}

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);

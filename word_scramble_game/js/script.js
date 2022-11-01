const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
const inputField = document.querySelector("input");
const timeText = document.querySelector(".time b");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(()=>{
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        } 
        clearInterval(timer);
        alert(`시간을 초과하셨습니다. 정답은 '${correctWord}' 입니다.`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(10);
    // suffle word array
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    let suffle = false;
    let orgStr = wordArray.join('');
    while(suffle===false) {
        wordArray.sort(() => Math.random() - 0.5);
        if (orgStr !== wordArray.join('')) suffle=true;
    }
    // set value
    wordText.innerText =  wordArray.join('');
    hintText.innerText = randomObj.hint;
    correctWord = orgStr;
    inputField.value = '';
    inputField.setAttribute("maxlength", correctWord.length);
}

const checkWord = () => {
    let userWord = inputField.value;
    console.log(correctWord,"//",userWord);
    if (!userWord) return alert("정답을 입력해주세요.");
    if (correctWord !== userWord) return alert(`'${userWord}', 정답이 아닙니다.`); 
    alert(`'${userWord}', 정답입니다!`);
    initGame();
}

initGame();
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
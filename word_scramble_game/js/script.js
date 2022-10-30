/* need
1. time left
2. random quiz & hint -> word.js
3. check resolve and quiz
4. refresh button
5. send solution button
*/

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    console.log(randomObj);
    console.log(Math.random());
}
initGame();
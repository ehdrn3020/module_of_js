// 1.async
async function fetchUser () {
    return 'dgk';
}
const user = fetchUser();
// promise로 return
user.then((value)=>console.log(value));
console.log(user);


//2.await
function delay(ms) {
    return new Promise(resolve=>setTimeout(resolve, ms));
} 

async function getApple() {
    await delay(1000);
    // throw 'error';
    return 'Apple';
}

async function getBanana() {
    await delay(1000);
    return 'Banana';
}

// callback hell
// function pickFruits() {
//     return getApple().then((apple)=>{
//         return getBanana().then((banana)=> `${apple}+${banana}`);
//     });
// }

// 위의 콜백지옥 변환
// async function pickFruits() {
//     try {
//         const apple = await getApple();
//         const banana = await getBanana();
//         return `${apple}+${banana}`
//     } catch (error) {
//         console.log(error);
//     }
// }

// 위코드 병렬화
async function pickFruits() {
    try {
        // const applePromise = await getApple();
        // const bananaPromise = await getBanana();
        // const apple = await applePromise;
        // const banana = await bananaPromise;
        // return `${apple}+${banana}`

        // promise.all 배열로 리턴
        return Promise.all([getApple(), getBanana()]).then(fruits_array=>fruits_array.join('+'));
    } catch (error) {
        console.log(error);
    }
}

pickFruits().then(value=>console.log(`value: ${value}`));
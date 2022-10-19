
class UserStorage {
    loginUser(id, pwd) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (id === 'dgk' && pwd === 'dgk') {
                    resolve(id);
                } else {
                    reject(new Error('not found!'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (user === 'dgk') {
                    resolve({ name: 'dgk', role: 'master' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
        
    }
}

const userStorage = new UserStorage();

userStorage.loginUser('dgk', 'dgk')
    .then(user=>userStorage.getRoles(user))
    .then(value=>console.log(value))
    .catch(value=>console.log(value));
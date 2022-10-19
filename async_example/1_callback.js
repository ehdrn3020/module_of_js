
class UserStorage {
    loginUser(id, pwd, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'dgk' && pwd === 'dgk') {
                onSuccess(id);
            } else {
                onError(new Error('not found!'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'dgk') {
                onSuccess({ name: 'dgk', role: 'master' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = 'dgk';
const pwd = 'dgk';
userStorage.loginUser(
    id,
    pwd,
    user_id => {
        userStorage.getRoles(
            user_id,
            userRole => console.log(`Hello ${userRole.name}, ${userRole.role}`),
            error => console.log(error)
        )
    }, 
    error => console.log(error)
    )
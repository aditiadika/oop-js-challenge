let checkUser = [];

class Auth {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLoggedIn = false;
        this.logDate = 0;
    }

    validate(username, password) {
        if (username === this.username && password === this.password) {
            console.log(`${this.username} account is verified`);
        }
    }

    login(username, password) {
        if (username === this.username && password === this.password) {
            for (let i=0; i<checkUser.length; i++) {
                if (checkUser[i].username === this.username) {
                    checkUser[i].isLoggedIn = true;
                }
            }
            this.logDate = new Date();
            console.log(`${this.username} is logged in.`);
        } else if(username === this.username && password != this.password){
            console.log(`Wrong Password!`)
        }
    }

    logout() {
        for (let i=0; i<checkUser.length; i++) {
            if (checkUser[i].username === this.username) {
                checkUser[i].isLoggedIn = false;
            }
        }
        console.log(`${this.username} is logged out.`);
    }

    check() {
        console.log(this.isLoggedIn);
    }
    
    lastLogin() {
        console.log(this.logDate);
    }
}

const user = new Auth(1, 'root', 'supersecret');
checkUser.push(user);

// uncomment user validate to run this
// user.validate('root', 'supersecret');

// uncomment user login to run this
user.login('root', 'supersecret');

// uncomment user logout to run this
// user.logout();

// uncomment user check and user login to run this
// user.check();

// uncomment user logDate to run this
user.lastLogin();

// const userOne = {
//     username: 'ld',
//     email: 'ld@gmail.com',
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     }
// }

// console.log(userOne.email, userOne.username);
// userOne.login();

// ------------------------------------------------
// class is reusable

// class User {
//     // This is same shorthand syntax for a function 
//     // that we use inside object 
//     // Exractly is class
//     constructor(username, email) {
//         // set up properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login() {
//         // use this refers window object :v arrow pass context
//         console.log(`${this.username} just logged in`)
//         return this;
//     }
//     logout() {
//         // use this refers window object :v arrow pass context
//         console.log(`${this.username} just logged out`)
//         return this;
//     }
//     incScore() {
//         this.score +=1;
//         console.log(`${this.username} has a score of ${this.score}`)
//         return this;
//     }
// }


// constructor function (Before the class keyword came)

function User(username, email) {
    this.username = username;
    this.email = email;
    // not defined in the __proto__
    // this.login = function () {
    //     console.log(`${this.username} has logged in`)
    // };

}

User.prototype.login = function () {
    console.log(`${this.username} has logged in`);
    return this;
}
User.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
    return this;
}

function Admin(username, email, title) {
    // attach User properties
    User.call(this, username, email);
    // extra properties
    this.title = title;
}

// like super
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(user) {
    // delete user 
}

// ------------------------------------------------


// instance of object refers to the individual object that we
// actually create using the class
const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('luigi', 'luigi@gmail.com');
const userThree = new Admin('ld', 'ldkhanh@gmail.com', 'handsome')
console.log(userOne, userTwo, userThree);

// ------------------------------------------------

// the new keyword
// 1. it creates a new empty object {}
// 2. it binds the value of 'this' to the new empty object
// 3. it calls the constructor function to 'build'  object
// ------------------------------------------------

// userOne.login();
// userOne.logout();

// ------------------------------------------------

// userOne.login().logout(); 
// => error because we return undefined

// ------------------------------------------------

// if we want we could return this

// So now every time we call one of these methods we're
// returning the object instance itself and since now
// we return the object instance we can call another
// method on it straight away

// => like this we can chain them together

// You don't want method changenable -> you don't always
// to return this 

// You could do that but if you want to chain them together
//  then you can return this 

// userOne.login().incScore().incScore().logout();

// ----------------------------------------------
// Inheritance

// class Admin extends User {
//     // auto get constructor from User
//     // methods 
//     constructor(username, email, title) {
//         super(username, email);
//         this.title = title;
//     }
//     deleteUser(user) {
//         users = users.filter(u => u.username !== user.username)
//     }
// }   

// const userThree = new Admin('LD', 'ldkhanh@gmail.com', 'handsome admin');
// console.log(userThree);

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);




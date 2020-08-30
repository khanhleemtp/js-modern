import {styleBody, addTitle, contact } from './dom';
// run top to botton in dom

// use random name(by default)
import users, { getPremUsers} from './data';

// next
console.log('index file')
console.log(users)
const preUsers = getPremUsers(users);
console.log(preUsers);
console.log('hello ld')
// when we're using modules each file has its own unique scope
styleBody();
addTitle('giang_ld');
console.log('giang')

// webpack-dev-server run visual JS -> not change bundle.js
console.log(contact);
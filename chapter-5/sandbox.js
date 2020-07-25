// blog object
// properties: title, content, author
// methods: publish, unpublish, delete

// object literals
// const blogs = [
//     { title: 'Why mac & cheese rules', likes: 30},
//     { title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs)

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@gmail.com',
//     location: 'berlin',
//     blogs: [
//         { title: 'Why mac & cheese rules', likes: 30},
//         { title: '10 things to make with marmite', likes: 50}
//     ],
//     login(){
//         console.log('User logged in')
//     },
//     logout(){
//         console.log('User logged out')
//     },
//     logBlogs(){
//         // this đại diện cho users
//         // k sử dụng arrow function vì từ khóa this sẽ lấy context bên ngoài
//         // là window => điều cta k muốn
//         // console.log(this)
//         // console.log(this.blogs)
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach((blog) => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// // console.log(user);
// // console.log(user.name);

// // user.age = 25;

// // console.log(user.age);

// // const key = 'location';

// // console.log(user[key]);

// // user['name'] = 'chun-li';

// // console.log(user['name']);

// // console.log(typeof user)

// user.login();
// user.logout();

// const name = 'mario';

// name.toUpperCase();

// // console.log(this) // window
// user.logBlogs()





// Math Object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random number

// const random = Math.random();

// console.log(Math.round(random*100))



///Symbol
// primitive types: Number, strings, boolean, null, undefined, symbols
// reference types: all types of object: object literals, arrays, functions, dates, all other objects
// lquan lưu trong bộ nhớ 
// các kiểu nguyên thủy lưu trong stack - truy cập nhanh 
// khi tạo bản sao tạo ra 1 cái mới hoàn toàn ở stack

// kiểu tham chiếu lưu trong vùng nhớ heap - chậm hơn
// các đối tượng tham chiếu lưu ở stack dưới dạng con trỏ, cần lấy dữ liệu
// sẽ dùng con trỏ để tìm dl trong vùng nhớ heap
// khi sao chép đối tượng thực chất là sao chép con trỏ và thêm vào stack
// khi update dl cả 2 cùng update

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);
userTwo.age = 40;
userOne.name = 'LD'
console.log(userOne, userTwo);

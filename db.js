// Import the dotenv module.
// Call its `.config()` method
require('dotenv').config();

const pgp = require('pg-promise')();
const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_NAME);

console.log('yay you did the thing. wow.');
// console.log(db);
// db.any(`
// select * from todos
// `)
//     .then((data) => {
//         console.log('here is the data:');
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("UH OH.");
//         console.log(error);
//     })


// When you want one and only one,
// use the .one() method.
// That way, if you don't find it,
// it triggers the .catch().
// This is better than doing an if/else
// inside your .then().
// .one() will throw an exception if it
// gets anything but 1 and only 1 result.
function getOne(id) {
    db.one(`
        select * from todos where id=$1
    `, [id])
    .then((data) => {
        console.log('here is the data:');
        console.log(data);
    })
    .catch((error) => {
        console.log("UH OH.");
        console.log(error);
    })
}
getOne(42);
// Import the dotenv module.
// Call its `.config()` method
require('dotenv').config();

const pgp = require('pg-promise')();
const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

console.log('yay you did the thing. wow.');
// console.log(db);
db.any(`
select * from todos
`)
    .then((data) => {
        console.log('here is the data:');
        console.log(data);
    })
    .catch(() => {})


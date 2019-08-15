// 1. Collect and prep ingredients
const db = require('../db');


// 2. Cook.
function getAll() {
    return db.any(`
        select * from users
    `)
    .catch((error) => {
        console.log("Error getting users.");
        console.log(error);
    })
}

// Here's what we want from getOne():
// {
//     id: 1,
//     displayname: "alice",
//     username: "3l33th4x0r",
//     todos: [
//         {id:1, task: "walk the cat down the street."},
//         {}
//         {}
//     ]
// }

function getOne(id) {
    return db.one(`
        select * from users where id=$1
    `, [id])
    .then((user) => {
        // get the Todos for this user.
        const todos = db.any(`
            select * from todos where user_id=$1
        `, [id])
        .then((todosForUser) => {
            console.log(todosForUser);
            user.todos = todosForUser;
            return user;
        })

        return todos;
    })
    .catch((error) => {
        console.log("Error getting user");
        console.log(error);
    })
}

// 3. Serve.
module.exports = {
    getAll,
    getOne
};
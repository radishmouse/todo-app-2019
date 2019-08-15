// 1. Collect and prep ingredients
const db = require('../db');


// 2. Cook.
async function getAll() {
    const users = await db.any(`
        select * from users
    `);
    console.log("We got users!");

    return users;
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

async function getOne(id) {
    try {
        const user = await db.one(`
            select * from users where id=$1
        `, [id]);
        
        const todosForUser = await db.any(`
            select * from todos where user_id=$1
        `, [user.id]);
    
        user.todos = todosForUser;
        return user;
    } catch (error) {
        console.log("There was an error retreiving user!");
        return {
            id: 0,
            displayname: "No user found"
        };
    }
}

// 3. Serve.
module.exports = {
    getAll,
    getOne
};
const db = require('../db');

function getAll() {
    return db.any(`
            select * from todos
        `)
        .catch((error) => {
            console.log("UH OH.");
            console.log(error);
        })
}

function getOne(id) {
    // When you want one and only one,
    // use the .one() method.
    // That way, if you don't find it,
    // it triggers the .catch().
    // This is better than doing an if/else
    // inside your .then().
    // .one() will throw an exception if it
    // gets anything but 1 and only 1 result.
    return db.one(`
        select * from todos where id=$1
    `, [id])
    // .then((data) => {
    //     console.log('here is the data:');
    //     console.log(data);
    // })
    .catch((error) => {
        console.log("UH OH.");
        console.log(error);
    })
}

module.exports = {
    // This is the same as
    // getAll: getAll,
    getAll,
    getOne,
};
// require pg promise
const pgp = require('pg-promise')({
    query: e => {
    console.log('QUERY: ', e.query);
    }  
});

// for connecting the database
const options = {
    host: 'localhost',
    database: 'todo-app'
};
// set pg-promise and options to variable to export
const db = pgp(options);
// export so it can be used elsewhere
module.exports = db;
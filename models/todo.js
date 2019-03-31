// require db to be able to use the database 
const db = require('./connect');
// create class to be able to pull, change, or add to the database
class toDo {
    constructor (id, name, task, completed){
        this.id = id;
        this.name = name;
        this.task = task;
        this.completed = completed;
    }
    // get all from todo database
    static getAll(){
        return db.any(`select * from todo`)
    }
}
module.exports = toDo;
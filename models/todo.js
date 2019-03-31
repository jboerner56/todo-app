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
        // sql command to get the wanted data
        // must return so it can be used
        return db.any(`select * from todo`)
        // what will be done with the data
        .then ((arrayOfToDos) => {
            // creates an array of each item in the todo database
            return arrayOfToDos.map((todoData) => {
                const aToDo = new toDo(
                    todoData.id,
                    todoData.name,
                    todoData.task,
                    todoData.completed
                );
                return aToDo;
            });
        });
    }
    // get database item based on id#
    static getById(id){
        // sql command to get by the given id #
        return db.one(`select * from todo where id=${id}`)
        .then((toDoInfo) => {
            return new toDo(
                toDoInfo.id,
                toDoInfo.name,
                toDoInfo.task,
                toDoInfo.completed
            );
        });
    }
}
module.exports = toDo;
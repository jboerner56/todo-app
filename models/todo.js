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
        .then ((arrayOfToDos) => {
            return arrayOfToDos.map((todoData) => {
                const aToDo = new toDo(
                    todoData.score,
                    todoData.id,
                    todoData.content,
                    todoData.restaurant_id,
                    todoData.user_id
                );
                return aToDo;
            });
        });
    }
}
module.exports = toDo;
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const Todo = require('../models/todo');
// tests for todo database
describe('todo model', () => {
    it('should be able to retrieve all todos', async() => {
        // set all todo's to a variable
        const allTodos = await Todo.getAll();
        // tells mocha what it should see if everything works correctly
        expect(allTodos).to.be.an.instanceOf(Array);
        // for loop to go through all the individal todos
        for(let i=0; i < allTodos.length; i++){
            expect(allTodos[i]).to.be.an.instanceOf(Todo);
        }
    });
    // get individual todo by serial id #
    it('should be able to get todo by id', async() => {
        // sets the data to a variable
        const theToDo = await Todo.getById(3);
        // tells mocha what the expected data will be
        expect(theToDo).to.be.an.instanceOf(Todo);
    });
});
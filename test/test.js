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
        for(let i=0; i < allTodos.length; i++){
            expect(allTodos[i]).to.be.an.instanceOf(Todo);
        }
    });
});
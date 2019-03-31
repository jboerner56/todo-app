const http = require('http');
// this is the local ip for every computer
const hostname = '127.0.0.1';
// port the server will listen on
const port = 3000;
// import todo class
const Todo = require('./models/todo');
// creates the server
const server = http.createServer(async (req, res) => {
    // status code for all is well
    res.statusCode = 200;
    // sets what form of data the server is looking for
    res.setHeader('content-type', 'application.json');
// what the server will look for in the url
    if(req.url.startsWith("/todo")) {
        // method will be used for the different ways of requesting data from db
        const method = req.method;
        // splits the url by "/"
        const parts = req.url.split("/");
        // using a GET request
        if(method === "GET"){
            // if there are 2 parts in request url
            if (parts.length === 2) {
                const allToDos = await Todo.getAll();
                const toDoJSON = JSON.stringify(allToDos);
                res.end(toDoJSON);
                // when there are 3 parts in the url
                // the user is trying to get by an individal id
            } else if (parts.length === 3){
                // the second index of 'parts' is the id from the todo db
                const toDoID = parts[2];
                // 
                const theToDo = await Todo.getById(toDoID);
                // need to change data to a string so it will show up in browser
                const toDoJSON = JSON.stringify(theToDo);
                res.end(toDoJSON);
            } else {
                // need else block for if there is no data for what the person is looking for
                res.statusCode = 404;
                res.end('No Data Available');
            }
        }
    }
});
// shows where the server is running and on what port
server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}, ${port}`);
});
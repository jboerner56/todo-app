const http = require('http');
const hostname = '127.0.0.1';
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
                const toDoID = parts[2];
                const theToDo = await Todo.getById(toDoID);
                const toDoJSON = JSON.stringify(theToDo);
                res.end(toDoJSON);
            }
        }
    }
});
// shows where the server is running and on what port
server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}, ${port}`);
});
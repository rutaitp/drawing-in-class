//Express server setup
let express = require('express');
let app = express();

//Serve public folder
app.use(express.static('public'));

//Step 2. HTTP Server
let http = require('http');
let server = http.createServer(app);

//Listen
let port = 3000;
server.listen(port, () => {
  console.log('Server is listening on localhost: ' + port);
});

/*SOCKET CODE */
//Step 3. Socket connection
let io = require('socket.io');
io = new io.Server(server);

//Step 3.2
io.on('connection', (socket) => {
  console.log('Client connected: ' + socket.id);
  // console.log(socket);

  //Step 6. Listen for data coming
  socket.on('data', (data) => {
    console.log(data);

    //Step 7. Emit data back to the clients
    //Send to all clients, including us
    io.emit('data', data);

    //Send to all clients, except us
    //socket.broadcast.emit('data', data);

    //Send only to ourselves
    //socket.emit('data', data);
  });

  socket.on('disconnect', () =>{
    console.log('Client disconnected: ' + socket.id);
  });
});

# Sockets & Socket.io
1. Client-side setup: p5 functions setup() & mouseMoved()
2. Server-side setup: HTTP Server
http = require('http')
server = http.createServer(app)
server.listen
3. Server-side socket connection
	3.1 Require socket.io and start a server
	3.2 Establish connection & log id
	3.3 Log id when client disconnects
4. Client-side socket connection
	4.1 Log connection on the client side

# Data exchange
5. Client: emit the data
6. Server: listen for data from the client
7. Server: emit data to other clients
8. Client: listen for data and do something with it

# Additional
9. Assign random color and ellipse size to each client at the beginning
10. Change color on mouse click

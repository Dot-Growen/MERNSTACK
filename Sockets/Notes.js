const { Socket } = require("dgram");
// ENTER => Web Sockets

// Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.
// Web sockets work by generating an "agreement" so to speak. This "agreement" is called a handshake. Once the handshake is complete, both the client and the server can send data to each other without making another HTTP request. 

// npm install socket.io
// npm install socket.io-client => with react

// server.js
const express = require("express");
const app = express();

const server = app.listen(8000, () =>
    console.log("The server is all fired up on port 8000")
);
// To initialize the Socket, we need to
// pass invoke a new instance of Socket.io
// and pass it our express server
const io = require("socket.io")(server)

io.on("connection", socket => {
    // Each client that connects get their own socket id!
    console.log(socket.id);
    // if this is logged in our node terminal, that means a new client
    // has successfully completed the handshake!
    socket.on("event_from_client", data => {
        // socket.broadcast will emit to all other clients besides the 
        // client who is actually emitting

        socket.broadcast.emit("send_data_to_all_other_clients", data);
    });
});



//******** React ********\\

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
    // notice that we pass a callback function to initialize the socket
    // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        // we need to set up all of our event listeners
        // in the useEffect callback function
        console.log('Is this running?');

        // socket.on will listen for an event from the client
        socket.on('Welcome', data => console.log(data));

        // note that we're returning a callback function
        // this ensures that the underlying socket will be closed if App is unmounted
        // this would be more critical if we were creating the socket in a subcomponent
        return () => socket.disconnect(true);
    }, []);

    return (
        <div className="App">
            <h1>Socket Test</h1>
        </div>
    );
}

export default App;


// io.emit emits an event to all connected clients
// socket.broadcast.emit emits an event to all clients other than this particular one, referenced by the socket variable
// socket.emit emits an event directly to this specific client

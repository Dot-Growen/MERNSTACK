import { Card, Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Message';

function Chat() {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        console.log('Is this running?');
        socket.on('Welcome', data => console.log(data));

        return () => socket.disconnect(true);
    }, []);

    const [user, setUser] = useState("Lydell");

    const messages = [
        {
            name: "Lydell",
            message: "Check out this webite i made"
        },
        {
            name: "Tyree",
            message: "Check out this Chair i made"
        },
        {
            name: "Lydell",
            message: "Check out this game i made"
        },
        {
            name: "Angelica",
            message: "Check out this book i made"
        },

    ]

    return (
        <div className="App">
            <Paper className="m-5 mx-auto text-center p-2" style={{ maxWidth: "60%", width: "50em" }} elevation={1}>
                <h1>MERN Chat</h1>
            </Paper>
            <Card className="mx-auto p-4" style={{ maxWidth: "60%", width: "50em" }} variant="outlined">
                {messages.map((msg, idx) => {
                    return (
                        <Message
                            name={msg.name}
                            message={msg.message}
                            user={user}
                        />
                    )
                })}
            </Card>
        </div>
    );
}

export default Chat;

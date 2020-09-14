import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Button, Paper, TextField } from '@material-ui/core';

export default () => {


    return (
        <div>
            <Paper className="mt-5 w-75 mx-auto text-center p-2"  elevation={1}>
                <h1>MERN Chat</h1>
            </Paper>
            <Paper className="mt-1 w-75 mx-auto p-3" elevation={1} >
                <form>
                    <h3 className="text-center mb-4">Get started right now!</h3>
                    <label htmlFor="name">I want to start chatting with the name...</label>
                    <div className="row px-3">
                        <TextField className="col-8" fullWidth label="Enter name" id="name" variant="outlined" />
                        <Button variant="contained" className="col-3 ml-4" style={{ backgroundColor: "lightskyblue" }} >Start Chatting</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}
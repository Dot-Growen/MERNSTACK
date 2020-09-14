import { Card } from '@material-ui/core';
import React from 'react';

const Message = (props) => {

    const { name, message, user} = props
    let direction = "flex-end"
    let text = "text-right"

    if(name != user){
        direction = "flex-start"
    }   

    return (
        <div style={{display: "flex", WebkitJustifyContent: direction}}  >
            <Card className="p-2 m-2" style={{width: "40%"}} variant="outlined">
                <p className=" pl-1 font-weight-bold">{name} said</p>
                <p className="pl-3">{message}</p>
            </Card>
        </div>
    );
}

export default Message;

import React, { useEffect, useState } from 'react'
import { Card } from '@material-ui/core';
import { Link } from '@reach/router';

const GameArea = (props) => {

    const { gameNumber } = props

    return (
        <div>
            <div className="d-flex mb-4 justify-content-center" >
                <h3><Link style={{ borderRight: "solid 2px black", padding: ".2em" }} to="/players/list" >Manage Players</Link></h3>
                <h3><Link style={{ padding: ".2em" }} to="/status/game/1" >Manage Player Status</Link></h3>
            </div>
            <Card style={{ padding: "2em", textAlign: "center" }}>
                <h1>Player Status - Game {gameNumber}</h1>
                <div  className="d-flex justify-content-center" >
                    <h3><Link style={{ borderRight: "solid 2px black", padding: ".2em" }} to="/status/game/1" >Game 1</Link></h3>
                    <h3><Link style={{ borderRight: "solid 2px black", padding: ".2em" }} to="/status/game/2" >Game 2</Link></h3>
                    <h3><Link style={{ padding: ".2em" }} to="/status/game/3" >Game 3</Link></h3>
                </div>
            </Card>
        </div>
    );
}

export default GameArea;

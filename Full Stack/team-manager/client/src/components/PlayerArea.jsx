import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from '@reach/router';
import Form from './Form'

const PlayerArea = (props) => {

    const { component } = props

    return (
        <div>
            <div className="d-flex mb-4 justify-content-center" >
                <h3><Link style={{ borderRight: "solid 2px black", padding: ".2em" }} to="/players/list" >Manage Players</Link></h3>
                <h3><Link style={{ padding: ".2em" }} to="/status/game/1" >Manage Player Status</Link></h3>
            </div>
            <Card style={{ padding: "2em" }}>
                <div className="d-flex justify-content-center" >
                    <h3><Link style={{ borderRight: "solid 2px black", padding: ".2em" }} to="/players/list" >List</Link></h3>
                    <h3><Link style={{ padding: ".2em" }} to="/players/addplayer" >Add Player</Link></h3>
                </div>
                {component}
            </Card>
        </div>
    );
}

export default PlayerArea;

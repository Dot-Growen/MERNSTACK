import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import DeleteButton from './DeleteButton';

const PlayerList = (props) => {

    const { players, removeDom  } = props
    const removeFromDom = authorId => {
        removeDom(authorId)
    }

    return (
        <div style={{ padding: "2em" }}>
            <TableContainer elevation={3} component={Paper} >
                <Table stickyHeader size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Player Name</TableCell>
                            <TableCell>Preferred Position</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player, idx) => {
                            return (
                                <TableRow key={idx} >
                                    <TableCell>{player.playerName}</TableCell>
                                    <TableCell>{player.position}</TableCell>
                                    <TableCell> <DeleteButton playerId={player._id} successCallback={() => removeFromDom(player._id)} /> </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PlayerList;

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerList from '../components/PlayerList';
import PlayerArea from '../components/PlayerArea';

export default () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        axios('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data))
            .catch(error => console.log(error))
        return () => (isSubscribed = false);
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
        console.log(players)
    }

    return (
        <div className="p-5">
            <PlayerArea component={ <PlayerList removeDom={removeFromDom} players={players} /> } />
        </div>
    )
}
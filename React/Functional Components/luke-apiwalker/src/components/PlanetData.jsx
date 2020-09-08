import React from 'react';
import Search from './Search'

const PlanetData = (props) => {

    const transferData = (data) => {
        props.onSend(data)
    }

    const transferInfo = (info) => {
        props.onSendInfo(info)
    }

    return (
        <div className="mx-auto w-100 pt-3">
            <Search onAdd={transferData} onAddInfo={transferInfo} />
            <div className="mx-auto w-25 pt-3">
                <h3>{props.name}</h3>
                <p><b>Climate:</b> {props.climate}</p>
                <p><b>Terrain:</b> {props.terrain} </p>
                <p><b>Surface Water:</b> {props.surfaceWater}</p>
                <p><b>Population:</b> {props.population}</p>
            </div>
        </div>
    );
}

export default PlanetData;

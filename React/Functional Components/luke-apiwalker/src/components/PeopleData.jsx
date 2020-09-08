import React from 'react';
import Search from './Search'

const PeopleData = (props) => {

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
                <p><b>Height:</b> {props.height}</p>
                <p><b>Mass:</b> {props.mass} </p>
                <p><b>Hair Color:</b> {props.hairColor}</p>
                <p><b>Skin Color:</b> {props.skinColor}</p>
            </div>
        </div>
    );
}

export default PeopleData;

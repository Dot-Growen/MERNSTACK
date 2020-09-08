import React from 'react';
import Search from './Search'

const Index = (props) => {

    const transferData = (data) => {
        props.onSend(data)
    }

    const transferInfo = (info) => {
        props.onSendInfo(info)
    }

    return (
        <div>
            <Search onAdd={transferData} onAddInfo={transferInfo} />
        </div>
    )
}

export default Index;

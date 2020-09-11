import React from 'react';
import { navigate } from '@reach/router'

export default props => {

    return (
        <div>
            {props.people.map((person, index) => {
                return <p key={index} onClick={() => {
                    navigate(`people/${person._id}`)
                }}>{person.firstName}, {person.lastName}</p>
            })}
        </div>
    );
}



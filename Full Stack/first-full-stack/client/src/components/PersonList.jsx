import React from 'react';
import { Link } from '@reach/router'

export default props => {

    return (
        <div>
            {props.people.map((person, index) => {
                return <p key={index}>
                <Link to={`people/${person._id}`}>
                    {person.firstName}, {person.lastName}
                </Link>
                </p>
            })}
        </div>
    );
}



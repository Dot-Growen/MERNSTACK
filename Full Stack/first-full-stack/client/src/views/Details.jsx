import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default props => {
    const [person, setPerson] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
            .then(console.log(props.id))
    }, []);
    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    );
}


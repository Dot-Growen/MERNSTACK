
import { Link, navigate } from '@reach/router';
import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';

export default () => {

    const [errors, setErrors] = useState([]);
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/new', author)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (

        <div>
            <h1>Favorite authors</h1>
            <Link to={'/'}>
                Home
            </Link>
            <p>Add a new author:</p>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Form initialName="" onSubmitProp={createAuthor} />

        </div>
    );
}
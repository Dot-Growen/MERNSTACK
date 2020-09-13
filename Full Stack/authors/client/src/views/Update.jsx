import { Link, navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';

export default (props) => {
    const { id } = props
    const [author, setAuthor] = useState(undefined);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => (isSubscribed ? setAuthor(res.data) : null))
            .then(res => setLoaded(true))
            .catch(error => console.log(error))
        return () => (isSubscribed = false);
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
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
            {loaded && (
                <>
                    <Link to={'/'}> Home </Link>
                    <p>Edit this author:</p>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <Form
                        initialName={author.name}
                        onSubmitProp={updateAuthor}
                        validLength={3}
                    />
                </>
            )}
        </div>
    );
}


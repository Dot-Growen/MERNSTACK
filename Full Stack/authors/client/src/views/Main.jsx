import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorTable from '../components/AuthorTable';
import { Link } from '@reach/router';

export default () => {
    const [author, setAuthor] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        let isSubscribed = true;
        axios('http://localhost:8000/api/authors')
            .then(res => setAuthor(res.data))
            .catch(error => (isSubscribed ? setError(error.toString()) : null))
        return () => (isSubscribed = false);
    }, [])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
        console.log(author)
    }

    return (
        <div>
            {!error && !author && <li>loading...</li>}
            {!error &&
                author &&
                <>
                    <Link to={'/new'} >Add an author</Link>
                    <p>We have quotes by:</p>
                    <AuthorTable author={author} removeDom={removeFromDom} />
                </>}
            {error && <li>{error}</li>}
        </div>
    )
}
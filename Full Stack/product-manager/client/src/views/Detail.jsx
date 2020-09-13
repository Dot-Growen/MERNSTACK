import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/" + props.id)
            .then(res => setProduct(res.data))
            .then(console.log(props.id))
    }, [])

    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/' + productId)
            .then(res => {
                navigate('/')
            })
    }

    return (
        <div>
            <h4>Title: {product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/${product._id}/edit`} >
                Edit
            </Link>
            <DeleteButton
                        productId={product._id}
                        successCallback={() => navigate('/')} />
        </div>
    )
}
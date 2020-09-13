import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton'

export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true)
            })
    },)
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/' + id, product)
            .then(res => {
                console.log(res);
                navigate(`/${id}`)
            });
    }
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton
                        productId={product._id}
                        successCallback={() => navigate('/')} />
                </>
            )}
        </div>
    )
}
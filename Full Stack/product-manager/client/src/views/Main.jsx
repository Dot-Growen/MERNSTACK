import React, {useState, useEffect} from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'
import axios from 'axios';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
                setLoaded(false)
        axios.get('http://localhost:8000/api')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
        console.log(product)
    }
    
    const createProduct = newProduct => {
        axios.post('http://localhost:8000/api/product/new', newProduct)
            .then(res => {
                setProduct([...product, res.data])})
    }

    return (
        <div>
            <ProductForm 
            onSubmitProp={createProduct} 
            initialTitle="" 
            initialPrice={0} 
            initialDescription=""  />
            <hr/>
            {loaded && <ProductList product={product} removeDom={removeFromDom} />}
        </div>
    )
}
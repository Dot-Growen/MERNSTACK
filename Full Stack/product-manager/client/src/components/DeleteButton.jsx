import React from 'react'
import axios from 'axios';
export default props => {
    const { productId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

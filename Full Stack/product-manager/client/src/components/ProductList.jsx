import React from 'react';
import { navigate } from '@reach/router'

export default props => {

    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx} onClick={() => {
                    navigate(`${product._id}`)
                }}>{product.title}</p>
            })}
        </div>
    );
}



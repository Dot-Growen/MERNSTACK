import React from 'react';

const Alphanumeric = (props) => {

    const word = "The word is:"
    const num = "The number is:"

    return (
        <div  className="text-center w-100 mx-auto pt-5 mt-5">
            <h3> {isNaN(props.data) ? word : num} {props.data}</h3>
        </div>
    );
}

export default Alphanumeric;
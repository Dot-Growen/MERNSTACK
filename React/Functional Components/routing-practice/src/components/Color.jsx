import React from 'react';

const Color = (props) => {
    return (
        <div className="text-center w-100 mx-auto pt-5 mt-5">
            <h3 style={{backgroundColor: props.bg, color: props.text, padding: ".5em"}}>The word is: {props.word}</h3>
        </div>
    );
}

export default Color;

import { navigate } from '@reach/router';
import React, { useState } from 'react'
export default (props) => {

    const { initialName, onSubmitProp, validLength } = props;
    const [name, setName] = useState(initialName);
    const [nameError, setNameError] = useState("");

    const handleChange = e => {
        setName(e.target.value)
        if (e.target.value.length < validLength) {
            setNameError("Name must be 3 characters or longer!")
        } else {
            setNameError("")
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label><br />
                {
                    nameError ?
                        <p style={{ color: 'red' }}>{nameError}</p> :
                        ''
                }
                <input
                    name="name"
                    value={name}
                    type="text"
                    onChange={handleChange}
                />
            </p>
            <input
                type="button"
                value="Cancel"
                onClick={() => navigate('/')}
            />
            <button type="submit" >Sumbit</button>
        </form>
    )
}
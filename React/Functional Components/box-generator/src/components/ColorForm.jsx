import React, { useState } from 'react'

const ColorForm = (props) => {
    const [color, setColor] = useState("")



    function handleChange(event) {
        const {value}= event.target
        setColor(value)
    }

    function sumbitColor(event) {
        props.onAdd(color)
        setColor("") // set input back to empty
        event.preventDefault()
    }


    return (
        <>
            <form className="mx-auto m-5 p-3 col-5 card ">
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">First Name: </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" value={color} placeholder="Enter a Color" onChange={handleChange} />
                    </div>
                    <button type="submit" className=" ml-1 btn btn-outline-primary col-sm-2" onClick={sumbitColor}>Add</button>
                </div>
            </form>
        </>
    )
}

export default ColorForm;
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Search = (props) => {

    const [type, setType] = useState("people")
    const [id, setId] = useState("1")
    const [result, setResult] = useState({})
    const [info, setInfo] = useState({
        type: "",
        id: ""
    })
    
    const apiWalker = "http://swapi.dev/api/" + type + "/" + id + "/"

    useEffect(() => {
        axios.get(apiWalker)
            .then(response => (setResult(response)))
            .then(setInfo({ type: type, id: id }))
            .catch(err => {
                console.log(err)
            })
    }, [apiWalker]);

    const handleSumbit = (e) => {
        console.log("type: " + type + " id: " + id)
        props.onAdd(result)
        props.onAddInfo(info)
        e.preventDefault()
    }

    return (
        <form className="w-50 mt-5 mx-auto card p-4">
            <div className=" form-group row">
                <label className="col-md-2 col-form-label">Search for:</label>
                <select name="name" value={type} onChange={(e) => setType(e.target.value)} className="col-md-4 form-control">
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label className="col-md-1 col-form-label">ID:</label>
                <div className="col-md-2">
                    <input name="id" value={id} type="number" onChange={(e) => setId(e.target.value)} className="form-control" />
                </div>
                <button onClick={handleSumbit} type="sumbit" className="col-md-3 btn btn-outline-primary">Search</button>
            </div>
        </form>
    );
}

export default Search;

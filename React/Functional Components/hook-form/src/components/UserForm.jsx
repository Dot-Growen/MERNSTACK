import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cfpassword, setCfpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, cfpassword };
        console.log("Welcome", newUser);
    }

    return (
        <>
            <form className="mx-auto m-5 p-3 col-5 card " onSubmit={createUser}>
                <div className="form-group">
                    <label htmlFor="fName">First Name: </label>
                    <input id="fName" className="form-control" type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input className="form-control" type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email Address: </label>
                    <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input className="form-control" type="password" onChange={(e) => setCfpassword(e.target.value)} />
                </div>
                <input className="btn btn-outline-primary" type="submit" value="Create User" />
            </form>
            <div className="mx-auto px-4 w-25">
                <p className="text-center" >View Form Data</p>
                <p className="text-left">First Name: {firstname} </p>
                <p className="text-left">Last Name: {lastname} </p>
                <p className="text-left">Email: {email} </p>
                <p className="text-left">Password: {password} </p>
                <p className="text-left">Confirm Password: {cfpassword} </p>
            </div>
        </>
    );

};

export default UserForm;
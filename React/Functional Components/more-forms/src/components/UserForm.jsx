import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [fNameError, setfNameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lNameError, setlNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cfpassword, setCfpassword] = useState("");
    const [cfpasswordError, setCfpasswordError] = useState("");

    const handlefNames = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 1) {
            setfNameError("First Name is required!");
        } else if (e.target.value.length < 3) {
            setfNameError("First Name must be 3 characters or longer!");
        } else {
            setfNameError("")
        }
    }

    const handlelNames = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 1) {
            setlNameError("Last Name is required!");
        } else if (e.target.value.length < 3) {
            setlNameError("Last Name must be 3 characters or longer!");
        } else {
            setlNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 1) {
            setPasswordError("Email is required!");
        } else if (e.target.value.length < 3) {
            setPasswordError("Email must be 3 characters or longer!");
        } else {
            setPasswordError("")
        }
    }

    const handlecfPassword = (e) => {
        setCfpassword(e.target.value)
        if (e.target.value != password) {
            setCfpasswordError("Passwords must match");
        } else {
            setCfpasswordError("")
        }
    }



    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, cfpassword };
        console.log("Welcome", newUser);
    }

    return (
        <>
            <form className="mx-auto m-5 p-3 col-3 card " onSubmit={createUser}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input className="form-control" type="text" onChange={handlefNames} />
                    {
                        fNameError ?
                            <p style={{ color: 'red' }}>{fNameError}</p> :
                            ''
                    }
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input className="form-control" type="text" onChange={handlelNames}/>
                    {
                        lNameError ?
                            <p style={{ color: 'red' }}>{lNameError}</p> :
                            ''
                    }
                </div>
                <div className="form-group">
                    <label>Email Address: </label>
                    <input className="form-control" type="email" onChange={handleEmail}/>
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input className="form-control" type="password" onChange={handlePassword}/>
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ''
                    }
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input className="form-control" type="password" onChange={handlecfPassword}/>
                    {
                        cfpasswordError ?
                            <p style={{ color: 'red' }}>{cfpasswordError}</p> :
                            ''
                    }
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
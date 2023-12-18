"use client";
import React, { useState } from 'react';
import axios from 'axios';

const page = () => {

    // On Change

    const [inputUser, setInputUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setInputUser({
            ...inputUser,
            [e.target.name]: e.target.value,
        });
    };


    // On Submit

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3000/api/admin/signup", inputUser);
    };



    return (
        <>
            <div class="container-fluid signForm">
                <div class="row h-100 align-items-center justify-content-center">
                    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                            <form onSubmit={handleSubmit}>
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <h3>Sign Up</h3>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" name="name" id="floatingText" placeholder="jhondoe" onChange={handleChange} />
                                    <label for="floatingText">Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com" onChange={handleChange} />
                                    <label for="floatingInput">Email</label>
                                </div>
                                <div class="form-floating mb-4">
                                    <input type="password" class="form-control" name="password" id="floatingPassword" placeholder="Password" onChange={handleChange} />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <a href="">Forgot Password</a>
                                </div>
                                <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                                <p class="text-center mb-0">Already have an Account? <a href="">Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
"use client";
import React, { useState } from 'react';

const URL = "http://localhost:5000/api/auth/login";

const page = () => {

    // On Change

    const [user, setUser] = useState({
        email: "",
        password: "",
    })


    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };


    // On Submit

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const data = await axios.post("http://localhost:5000/api/auth/login", inputUser);

    //         if (data) {
    //             alert('Login Successfully');
    //             window.location.href = '/admin';
    //         }
    //     } catch (error) {
    //         console.error('Login failed', error);
    //         alert('Login failed. Please check your credentials.');
    //     }
    // };






    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(user)
            });

            console.log("login form", response);

            if(response.ok){
                alert("Login Successfully");

                const res_data = await response.json();
                localStorage.setItem("token", res_data.token);

                setUser({email: "", password: ""});
                window.location.href = '/admin';
            }
            else{
                alert("Invalid Input");
                console.log("Invalid Input");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div class="container-fluid loginSec">
                <div class="row h-100 align-items-center justify-content-center">
                    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <form onSubmit={handleSubmit}>
                            <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                                <div class="mb-3">
                                    <h3>Admin Login</h3>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" name='email' class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleInput} />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-4">
                                    <input type="password" name='password' class="form-control" id="floatingPassword" placeholder="Password" onChange={handleInput} />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <a href="">Forgot Password</a>
                                </div>
                                <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import userService from '../service/user.service';

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }

    const registerUser = (e) => {
        e.preventDefault();
        console.log(user);

        userService.register(user).then((res) => {
            console.log("user registered successfully..")
            setMessage("User Registered successfully 👍")
            setUser({
                username: "",
                password: ""
            })
        }).catch((error) => {
            console.log(error);
        });

    }


    return (
        <>
            <div className="position-absolute bg-transparent top-50 start-50 translate-middle">
                <form onSubmit={(e) => registerUser(e)}>
                    <div className='text-center fs-3 text-white mb-2'>Registration</div>
                    {
                        message && <p className="fs-4 text-center text-success">{message}</p>
                    }
                    <div class="mb-3">
                        <label className='form-label fs-3 text-white' >Username</label>
                        <input for="usernameInput" type="text"
                            name="username"
                            class="form-control"
                            onChange={(e) => handleChange(e)}
                            value={user.username}
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label fs-3 text-white">Password</label>
                        <input type="text"
                            name="password"
                            class="form-control"
                            onChange={(e) => handleChange(e)}
                            value={user.password}
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label text-light" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                    <Link to="/login" class="inline active text-white px-3 ml-auto" aria-current="page" href="#">Login</Link>
                </form>
            </div>
        </>
    )
}

export default Register
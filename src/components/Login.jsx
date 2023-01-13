import React, { useContext, useState } from 'react'
import userService from '../service/user.service';
import { Link, useNavigate, useParams } from 'react-router-dom';
//import { toast } from 'react-toastify/dist/components';
import { toast } from 'react-toastify';

import { UserContext } from '../App';

const Login = () => {
    // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext);

    // const history = useHistory();
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const handleChange = (e) => {
        const value = e.target.value;
        setUserLogin({ ...userLogin, [e.target.name]: value });
    }

    const loginUser = (e) => {
        e.preventDefault();
        console.log(userLogin);
        //validation
        if (userLogin.username === '') {
            toast.error("Username is required.")
            return;
        } else if (userLogin.password === '') {
            toast.error("Password is required.")
            return;
        }

        userService.login(userLogin).then((res) => {
            dispatch({ type: "USER", payload: true })
            console.log("user loggedin...")
            setMessage("login successfull... 👍")
            // localStorage.setItem('token', res.data.token);
            // history.pushState("/")
            navigate("/smartphones");

        }).catch((error) => {
            console.log(error);
        });

    }
    return (
        <>

            <div className="position-absolute bg-transparent top-50 start-50 translate-middle">
                <form onSubmit={(e) => loginUser(e)}>
                    <div className='text-center fs-3 text-white mb-2'>Login</div>
                    {
                        message && <p className="fs-4 text-center text-success">{message}</p>
                    }
                    <div class="mb-3">
                        <label className='form-label fs-3 text-white' >Username</label>
                        <input for="usernameInput" type="text"
                            name="username"
                            class="form-control"
                            onChange={(e) => handleChange(e)}
                            value={userLogin.username}
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label fs-3 text-white">Password</label>
                        <input type="text"
                            name="password"
                            class="form-control"
                            onChange={(e) => handleChange(e)}
                            value={userLogin.password}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                    <Link to="/register" class="inline active text-white px-3 ml-auto" aria-current="page" href="#">Register</Link>
                </form>
            </div>
        </>
    )
}

export default Login;
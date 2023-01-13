import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
//import userService from '../service/user.service';


const Logout = () => {
    // eslint-disable-next-line
    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: "USER", payload: false })
            navigate("/login")
        }).catch((error) => {
            console.log(error);
        })

        // userService.logout().then((res) => {
        //     dispatch({ type: "USER", payload: false })
        //     navigate("/login")
        // }).catch((error) => {
        //     console.log(error);
        // })
    })


    return (
        <div>
            Login page
        </div>
    )
}

export default Logout;
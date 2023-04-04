import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {

    const {setUserInfo, userInfo} = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {

                setUserInfo(userInfo)

            })

        });

    }, []);



function logout(){
    fetch("http://localhost:4000/logout", {
        method: 'POST',
        credentials: "include"
    });
    setUserInfo(null)



}

const username = userInfo?.username
    return (
        <>

            <header>
                <Link to="/" className="logo">Logo</Link>
                <nav>

                    {username && (
                        <>
                            <Link to="/createPost"> Create New article</Link>
                            <Link onClick={logout}>Logout</Link>

                        </>

                    )}

                    {!username && (
                        <>
                            <Link to="/login" >Login</Link>
                            <Link to="/register">Register</Link>

                        </>

                    )}



                </nav>
            </header>
        </>
    )
}


import React, { useState } from 'react'

function RegisterPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    async function register(ev) {
        ev.preventDefault();


        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'Application/json' }

        })


        if (response.status === 200) {
            alert("registration Successful")

        } else {
            alert("registration Filed")

        }




    }







    return (
        <form className='register' onSubmit={register}>
            <h1> Register Page</h1>
            <input type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}

            />


            <input type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}

            />
            <button type="submit" > Register</button>
        </form>
    )
}

export default RegisterPage
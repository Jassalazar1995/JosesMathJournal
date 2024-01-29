import axios from 'axios'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

let emptyForm = { 
    username: '',
    password: ''
}

function Login({ setUser }) {
    
    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post('/api/auth/login', form)
            const token = response.data.token
            console.log('response')
            console.log(token)

            if (!token) {
                setForm(emptyForm)
                return
            } 

            localStorage.setItem("token", token)

            const userResponse = await axios.get('/api/users/profile', { 
                headers: {
                    Authorization: token
                }
            })
            console.log(userResponse)
            setUser(userResponse.data)
    
            navigate('/profile')

        } catch(err) {
            console.log(err)

        }
    }

    return ( 
        <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
            </div>
            </div>
        </>
     );
}

export default Login;
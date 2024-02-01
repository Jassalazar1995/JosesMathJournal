import axios from 'axios'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from '../Api';

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

            const response = await axios.post(baseURL + '/api/auth/login', form)
            const token = response.data.token
            console.log('response')
            console.log(token)

            if (!token) {
                setForm(emptyForm)
                return
            } 

            localStorage.setItem("token", token)

            const userResponse = await axios.get(baseURL + '/api/users/profile', { 
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
                <div className="w-full max-w-xs">
                    <h1 className="text-center text-2xl font-bold mb-8">Login</h1>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                                Username:
                            </label>
                            <input 
                                type="text" 
                                id="username"
                                name="username"
                                onChange={handleChange}
                                value={form.username}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password:
                            </label>
                            <input 
                                type="password" 
                                id="password"
                                name="password"
                                onChange={handleChange}
                                value={form.password}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
    
}

export default Login;
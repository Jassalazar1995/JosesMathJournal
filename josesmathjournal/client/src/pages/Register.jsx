import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import baseURL from '../Api';

let emptyForm = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
}

function Register({ setUser }){

    const navigate = useNavigate()

    let [ form, setForm ] = useState(emptyForm)

    const handleChange = (e) =>{
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            const response = await axios.post('/api/auth/register',form)
            const token = response.data.token
            
            console.log(token)

            if(!token) {
                setForm(emptyForm)
            }

            localStorage.setItem("token", token)

            const userResponse = await axios.get('/api/users', {
                headers: {
                    Authorization: token
                }
            })

            setUser(userResponse.data)
            console.log(userResponse.data)
            navigate('/profile')

        } catch (error) {
            console.log(error.response.data.error)
            alert(error.response.data.error)
        }
    }

    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl text-center mb-6">Register</h1>
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
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={form.email}
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
    }

export default Register;
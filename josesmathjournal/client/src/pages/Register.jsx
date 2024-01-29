import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            navigate('/')

        } catch (error) {
            console.log(error.response.data.error)
            alert(error.response.data.error)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div>
            <h1 className="text-2xl mb-8">Register</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username">Username: </label>
                <input 
                  type="text" 
                  id="username"
                  name="username"
                  onChange={handleChange}
                  value={form.username}
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name: </label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={form.firstName}
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name: </label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  value={form.lastName}
                />
              </div>
              <div>
                <label htmlFor="email">Email: </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={form.email}
                />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input 
                  type="password" 
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                  
                />
              </div>
              <div>
                <button>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    }

export default Register;
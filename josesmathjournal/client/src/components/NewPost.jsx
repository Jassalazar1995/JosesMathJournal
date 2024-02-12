/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react"
import axios from "axios";
import { useState } from "react";

const NewPost = ({username, setPost, post}) => {
    let [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
      }


    async function handleSubmit() {
        try {
            let postData = {
                body: input,
                user: username
            }
            console.log(postData)
            const response = await axios.post('/api/posts', postData)
            console.log(response.data)
            setPost([...post, response.data])
            setInput('')
            
        } catch (error) {
            console.log(error)
        }
    }
    function handlePicture() {

    }
  return (
    <div className="bg-slate-200 rounded-lg">
        <div className="flex flex-col mx-8 my-4 bg-white shadow-md rounded-lg" >
            <form onSubmit={handleSubmit}>
            <div className="bg-green-200 p-4 rounded-lg">
                <div className="flex items-center">
                    <img src="" alt="" className="w-10 bg-white h-10 ml-4 rounded-full"/>
                    <p className="pl-4">{username}</p>
                </div>
            </div>
            <div className="h-36 w-full p-8" >
                <input className="border-b-2 h-16 w-full placeholder:italic" placeholder="Post your favorite historical figure" name="body" onChange={handleChange}/>
                <Icon className="mt-4 text-xl hover:cursor-pointer" icon="material-symbols:android-camera" onClick={handlePicture}/>
            </div>
            <div className="bg-green-200 p-4 rounded-lg">
                <button className="self-end mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Post</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default NewPost
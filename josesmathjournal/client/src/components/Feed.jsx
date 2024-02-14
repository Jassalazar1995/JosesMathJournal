/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import FeedList from "./FeedList"
import NewPost from "./NewPost"
import Container from "./util/Container"
import axios from "axios"
import baseURL from "../Api"


const Feed = ({username}) => {
    const [post, setPost] = useState([])
    console.log(post)
    
    useEffect(() => {

        const getData = async () => {
          try {
            const response = await axios.get(`${baseURL}/api/posts`)
            console.log(response)
            setPost(response.data)
          } catch(err) {
            console.error(err)
          }
        }
    
        getData()
    
      }, [])
    
  return (
  <div>
    <Container className="mt-10"></Container>
    <Container className="pt-5 flex justify-center items-center mt-11">
      <div className="flex flex-col shadow-lg w-9/12 bg-white rounded-lg mt-11">
        <div className="p-5 text-4xl font-bold text-gray-800 border-b border-gray-200">
          Feed
        </div>
        <NewPost username={username} setPost={setPost} post={post} />
        <FeedList post={post} />
      </div>
    </Container>
  </div>
);
}

export default Feed
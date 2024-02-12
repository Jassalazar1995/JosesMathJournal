/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import FeedList from "./FeedList"
import NewPost from "./NewPost"
import Container from "./util/Container"
import axios from "axios"



const Feed = ({username}) => {
    const [post, setPost] = useState([])
    console.log(post)
    
    useEffect(() => {

        const getData = async () => {
          try {
            const response = await axios.get('/api/posts')
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
        <Container className="pt-28 flex justify-center items-center">
            <div className="flex flex-col shadow-md w-9/12">
                <div className="">
                    <p className="p-4 text-4xl">Feed</p>
                </div>
                <NewPost username={username} setPost={setPost} post={post}/>
                <FeedList post={post}/>
            </div>
        </Container>
    </div>
  )
}

export default Feed
/* eslint-disable react/prop-types */
import Post from "./Post"

const FeedList = ({post}) => {
    

  return (
    <div className="">
        <div className="flex flex-col mx-8 my-4 bg-white">
            {post.map((post, index) => (
                <Post key={index} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default FeedList
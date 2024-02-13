/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useState } from "react";
import axios from "axios";


const Post = ({ post }) => {
  // Start the like state that will grab likes from the database
  const [like, setLike] = useState(post.likes); 

  function handleSubmit() {}

  function handleClick(){    
    try {
      console.log(post.likes)
      setLike(like + 1)
      console.log(post._id)
      const response = axios.post(`/api/posts/${post._id}/like`)
      console.log(post)
  } catch (error) {
      console.log(error)
  }
}

  
  return (
    <div className="mb-4 shadow-sm rounded-lg overflow-hidden">
    <div className="border-b-2 border-gray-200">
      <div className="bg-gray-100 p-4">
          <div className="flex items-center">
            <img
              src="./images/stock/cat_caviar.jpg"
              alt=""
              className="w-10 bg-white h-10 ml-4 rounded-full"
            />
            {/* I will want to put user.profile.pic here */}
            <div className="flex flex-col pl-4">
              <p>{post.user}</p>
              <p className="text-sm text-gray-400">{post.timestamp}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full p-4 min-h-20 flex-col">
          <img src={post.img} alt="" className="max-h-40 object-scale-down" />
          <p>{post.body}</p>
        </div>
        <div className="bg-slate-200 p-4 flex items-center">
          <Icon
            className="text-orange-400 text-xl hover:cursor-pointer"
            icon="material-symbols:favorite"
            onClick={handleClick}
          />
          <p className="px-1">{like}</p>
          <Icon
            className="text-orange-400 text-xl"
            icon="material-symbols:chat"
          />
          <p className="px-2">{post.comments.length}</p>
        </div>
      </div>
      <div className="bg-slate-200">
        <div className="flex items-center p-4">
          <img src="./images/stock/profilepic.jpg" alt="" className="w-10 bg-white h-10 rounded-full" />
          {/* I will want to put user.profile.pic here */}
          <input
            className="bg-slate-200 border-b-[1px] border-black w-full ml-4"
            placeholder="Comment..."
            onKeyDown={(e) => {
              e.key === "Enter" && handleSubmit();
            }}
          />
        </div>
        <div className="flex">
          {post.comments &&
            post.comments.map((comment, index) => (
              <div className="w-full flex items-center" key={index}>
                <img
                  src="./images/stock/profilepic.jpg"
                  alt=""
                  className="w-10 bg-white h-10 ml-4 rounded-full"
                />
                <div className="flex flex-col m-4 bg-white w-full rounded-sm">
                  <div className="p-2">
                    <p className="text-purple-600">{comment.name}</p>
                    <p className="py-1">{post.comments[0]}</p>
                    {/* I think I have to map all of the comments from the comments array. */}
                    <p className="text-sm text-gray-300">{comment.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Post;

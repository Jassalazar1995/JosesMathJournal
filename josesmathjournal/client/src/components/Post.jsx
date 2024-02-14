/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";

// This component displays a single post and its comments
const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes);
  const [comments, setComments] = useState(post.comments || []);  // Initialize comments state
  const commentInputRef = useRef(null); // Ref for the comment input element


  async function handleSubmit(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const commentText = commentInputRef.current.value;

      if (commentText.trim()) {
        try {
          const payload = { text: commentText, user: "Alice" };  
          await axios.post(`${baseURL}/api/comments/${post._id}/comments`, payload);
          commentInputRef.current.value = "";

          // Refresh comments list
          const updatedComments = await axios.get(`${baseURL}/api/posts/${post._id}/comments`);
          setComments(updatedComments.data);
        } catch (error) {
          console.error("Error adding comment:", error);
        }
      }
    }
  }

  function handleClick() {
    try {
      setLike((prevLike) => prevLike + 1);
      axios.post(`${baseURL}/api/posts/${post._id}/like`);
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <div className="mb-4 shadow-sm rounded-lg overflow-hidden">
    <div className="border-b-2 border-gray-200">
      <div className="bg-gray-100 p-4">
          <div className="flex items-center">
            <img
              src="./images/stock/anotherpersonprofile.png"
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
          <img src="./images/stock/personprofile.png" alt="" className="w-10 bg-white h-10 rounded-full" />
          <input
            ref={commentInputRef}
            className="bg-slate-200 border-b-[1px] border-black w-full ml-4"
            placeholder="Comment..."
            onKeyDown={handleSubmit}
          />
        </div>
        <div className="flex flex-col space-y-2">
          {comments.map((comment, index) => (
            <div className="w-full flex items-center" key={index}>
              <img
                src="./images/stock/personprofile.png"
                alt=""
                className="w-10 bg-white h-10 ml-4 rounded-full"
              />
              <div className="flex flex-col m-4 bg-white w-full rounded-sm">
                <div className="p-2">
                  <p className="text-purple-600">{comment.user}</p> {/* Assuming 'user' field holds the commenter's name */}
                  <p className="py-1">{comment.text}</p>
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

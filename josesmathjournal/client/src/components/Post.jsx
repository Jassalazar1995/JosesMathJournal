/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const Post = ({ post }) => {
  function handleSubmit() {}

  function handleClick() {}
  return (
    <div className="mb-8 shadow-md">
      <div className="border-slate-400 border-b-2">
        <div className="bg-slate-200 p-4">
          <div className="flex items-center">
            <img
              src=""
              alt=""
              className="w-10 bg-white h-10 ml-4 rounded-full"
            />
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
          <p className="px-2">{post.likes}</p>
          <Icon
            className="text-orange-400 text-xl"
            icon="material-symbols:chat"
          />
          <p className="px-2">{post.comments.length}</p>
        </div>
      </div>
      <div className="bg-slate-200">
        <div className="flex items-center p-4">
          <img src="" alt="" className="w-10 bg-white h-10 rounded-full" />
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
                  src=""
                  alt=""
                  className="w-10 bg-white h-10 ml-4 rounded-full"
                />
                <div className="flex flex-col m-4 bg-white w-full rounded-sm">
                  <div className="p-2">
                    <p className="text-purple-600">{comment.name}</p>
                    <p className="py-1">{comment.body}</p>
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

/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const Post = ({ post }) => {
  function handleSubmit() {}

  function handleClick() {}

  return (
    <div>
      <img src="" alt="" />
      <div>
        <p>{post.user}</p>
        <p>{post.timestamp}</p>
      </div>
      <img src={post.img} alt="" />
      <p>{post.body}</p>
      <div>
        <Icon icon="material-symbols:favorite" onClick={handleClick} />
        <p>{post.likes}</p>
        <Icon icon="material-symbols:chat" />
        <p>{post.comments.length}</p>
      </div>
      <div>
        <img src="" alt="" />
        <input
          placeholder="Comment..."
          onKeyDown={(e) => {
            e.key === "Enter" && handleSubmit();
          }}
        />
      </div>
      {post.comments &&
        post.comments.map((comment, index) => (
          <div key={index}>
            <img src="" alt="" />
            <div>
              <p>{comment.name}</p>
              <p>{comment.body}</p>
              <p>{comment.timestamp}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;

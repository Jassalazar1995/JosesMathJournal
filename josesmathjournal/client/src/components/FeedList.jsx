/* eslint-disable react/prop-types */
import Post from "./Post"

const FeedList = ({ post }) => {
    return (
      <div className="mx-5 my-3">
        {post.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    );
  };

export default FeedList
import Header from "./Header";
import Body from "./Body";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="mx-auto h-fit max-w-lg rounded-lg bg-white p-3 shadow-sm">
      <Header />
      <Body />
      <Comments />
    </div>
  );
};

export default Post;

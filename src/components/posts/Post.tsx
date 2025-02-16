import Header from "./Header";
import Body from "./Body";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="mx-auto h-fit max-w-lg rounded-md bg-white px-3 pt-3 pb-5 shadow-sm">
      <Header />
      <Body />
      <Comments />
    </div>
  );
};

export default Post;

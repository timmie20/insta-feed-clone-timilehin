import Header from "./Header";
import Body from "./Body";
import Comments from "./Comments";
import { PostProps } from "../../types";

const Post = ({ post }: { post: PostProps }) => {
  const { body, imgUrl, reactions, id } = post;
  return (
    <div className="mx-auto h-fit max-w-lg rounded-md bg-white px-3 pt-3 pb-5 shadow-sm">
      <Header />
      <Body body={body} imgUrl={imgUrl || ""} reactions={reactions} id={id} />
      <Comments />
    </div>
  );
};

export default Post;

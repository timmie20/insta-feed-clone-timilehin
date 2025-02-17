import React, { forwardRef } from "react";
import Header from "./Header";
import Body from "./Body";
import { PostProps } from "../../types";
import Comments from "./Comments";

const Post = forwardRef<HTMLDivElement, { post: PostProps }>(
  ({ post }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div
        ref={ref} // Attach ref to the post container
        className="mx-auto h-fit max-w-lg rounded-md bg-white px-3 pt-3 pb-5 shadow-sm"
      >
        <Header />
        <Body
          body={post.body}
          imgUrl={post.imgUrl || ""}
          reactions={post.reactions}
          id={post.id}
        />{" "}
        <button
          onClick={handleToggle}
          className="shrink-0 cursor-pointer text-xs text-slate-400"
        >
          {!isOpen ? "See comments" : "Hide comments"}
        </button>
        <Comments isOpen={isOpen} />
      </div>
    );
  },
);

export default Post;

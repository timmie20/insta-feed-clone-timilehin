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
        ref={ref}
        className="mx-auto h-fit w-full rounded-md bg-white p-2 shadow-sm sm:p-4 md:max-w-md"
      >
        <Header />
        <Body
          body={post.body}
          imgUrl={post.imgUrl || ""}
          reactions={post.reactions}
          id={post.id}
        />
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

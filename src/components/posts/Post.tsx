import React, { forwardRef } from "react";
import Header from "./Header";
import Body from "./Body";
import Comments from "./Comments";
import { PostProps } from "../../types";

const Post = forwardRef<HTMLDivElement, { post: PostProps }>(
  ({ post }, ref) => {
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
        />
        <Comments />
      </div>
    );
  },
);

export default Post;

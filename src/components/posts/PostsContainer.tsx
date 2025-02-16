import React from "react";
import { useAppContext } from "../../context/AppContext";
import Post from "./Post";

export default function PostsContainer() {
  const { posts } = useAppContext();
  return (
    <div
      className="w-full space-y-3 overflow-scroll"
      style={{ height: "calc(97vh - var(--story-container-height))" }}
    >
      {posts?.posts.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

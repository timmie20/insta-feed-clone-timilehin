import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <div className="flex flex-col space-y-2">
      <Post />
      <Post />
      <Post />
    </div>
  );
}

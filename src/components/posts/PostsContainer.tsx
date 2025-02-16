import React from "react";
import Posts from "./Posts";

export default function PostsContainer() {
  return (
    <div
      className="w-full"
      style={{ minHeight: "calc(100vh - var(--story-container-height))" }}
    >
      <Posts />
    </div>
  );
}

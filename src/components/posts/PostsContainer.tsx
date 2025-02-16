import React from "react";
import Posts from "./Posts";

export default function PostsContainer() {
  return (
    <div
      className="w-full overflow-scroll"
      style={{ height: "calc(97vh - var(--story-container-height))" }}
    >
      <Posts />
    </div>
  );
}

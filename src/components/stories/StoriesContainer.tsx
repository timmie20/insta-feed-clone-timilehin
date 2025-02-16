import React from "react";
import Story from "./Story";
import { stories } from "../../data";

export default function StoriesContainer() {
  return (
    <div
      className="h-[var(--story-container-height)] w-full overflow-hidden rounded-t-lg border-[1px] border-slate-200 bg-white p-4"
      role="region"
      aria-label="User stories"
    >
      <div
        className="flex gap-6 overflow-x-auto scroll-smooth"
        role="list"
        aria-label="Story list"
      >
        {stories.map((story) => (
          <Story story={story} key={story.id} />
        ))}
      </div>
    </div>
  );
}

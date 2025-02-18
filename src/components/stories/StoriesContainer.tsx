import Story from "./Story";
import { stories } from "../../data";

export default function StoriesContainer() {
  return (
    <div
      className="relative z-10 h-[120px] w-full overflow-hidden rounded-t-lg border-[1px] border-slate-200 bg-white p-4 shadow-sm"
      role="region"
      aria-label="User stories"
    >
      <div
        className="flex gap-4 overflow-x-auto scroll-smooth sm:gap-6"
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

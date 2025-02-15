import { StoryProps } from "../../types";

export default function Story({ story }: { story: StoryProps }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="size-14 cursor-pointer rounded-full border-[1px] border-transparent bg-gradient-to-r from-violet-700 to-pink-500 p-[2px] focus-visible:ring-1"
        role="listitem"
        aria-label={`${story.user}'s story`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            console.log(`${story.user}'s story clicked`);
          }
        }}
      >
        <img
          src={story.imageUrl}
          alt={`${story.user}'s story`}
          className="h-full w-full rounded-full border-[2px] border-white object-cover"
        />
      </div>
      <span className="mt-2 text-xs text-gray-700">{story.user}</span>
    </div>
  );
}

import React from "react";
import Actions from "./Actions";
import { PostProps } from "../../types";

export default function Body({ body, imgUrl, reactions, id }: PostProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="mt-4">
        <img
          src={imgUrl}
          alt="image"
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>

      <Actions reactions={reactions} id={id} />

      {/* Post Details */}
      <div className="flex items-end px-2">
        <p className={`${!isExpanded && "truncate"} text-sm`}>{body}</p>
        <button
          onClick={handleToggle}
          className="shrink-0 cursor-pointer text-xs text-blue-500"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

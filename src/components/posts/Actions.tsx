import React from "react";
import { Heart, Bookmark, MessageCircle, Send } from "lucide-react";
import { PostProps } from "../../types";

export default function Actions({ reactions }: PostProps) {
  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Heart />
          <MessageCircle />
          <Send />
        </div>
        <Bookmark />
      </div>
      <span className="text-xs">{`${reactions?.likes} likes`}</span>
    </>
  );
}

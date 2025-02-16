import React from "react";
import { Heart, Bookmark, MessageCircle, Send } from "lucide-react";

export default function Actions() {
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
    </>
  );
}

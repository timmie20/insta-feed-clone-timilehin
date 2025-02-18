import { useState } from "react";
import { Bookmark, MessageCircle, Send } from "lucide-react";
import { PostProps } from "../../types";
import LikeButton from "../icon/LikeButton";

export default function Actions({ reactions, id }: PostProps) {
  const [liked, setLiked] = useState({ id: id ?? 0, isLiked: false });

  const onToggle = (postId: number) => {
    if (postId === liked.id) {
      setLiked((prev) => ({ ...prev, isLiked: !prev.isLiked }));
    }
    console.log(postId);
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LikeButton liked={liked} onToggle={onToggle} />
          <MessageCircle />
          <Send />
        </div>
        <Bookmark />
      </div>
      <span className="text-xs">{`${reactions?.likes} likes`}</span>
    </>
  );
}

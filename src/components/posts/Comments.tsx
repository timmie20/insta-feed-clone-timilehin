import React from "react";
import { Send } from "lucide-react";

export default function Comments() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mt-2">
      <button
        onClick={handleToggle}
        className="shrink-0 cursor-pointer text-xs text-slate-400"
      >
        {!isOpen ? "See comments" : "Hide comments"}
      </button>

      <div className="flex w-full items-center justify-between">
        <input
          className="w-10/12 border-b-[1px] border-slate-300 py-1.5 text-xs focus:outline-none"
          type="text"
          placeholder="Add a comment"
          autoComplete="off"
        />
        <button className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-pink-600 px-2.5 py-1.5 text-xs text-white">
          send <Send size={14} />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { EllipsisVertical } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          className="size-10 cursor-pointer rounded-full border-2 border-pink-600 p-px focus-visible:ring-1"
          role="listitem"
          aria-label="profile photo"
          tabIndex={0}
        >
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
            alt="profile photo"
            className="h-full w-full rounded-full border-[2px] border-white object-cover"
          />
        </div>

        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500">John Doe ~</span>
          <span className="text-xs">1 day ago</span>
        </div>
      </div>

      <span className="cursor-pointer">
        <EllipsisVertical />
      </span>
    </div>
  );
}

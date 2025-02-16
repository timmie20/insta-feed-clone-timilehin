import React from "react";
import Actions from "./Actions";

export default function Body() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
          alt="Beauty Product"
          className="h-auto w-full rounded-lg object-cover"
        />
      </div>

      <Actions />

      {/* Post Details */}
      <div className="mt-4 flex items-end px-2">
        <p className={`${!isExpanded && "truncate"} text-sm`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          consequuntur beatae nam vel? Eaque nostrum, eveniet quisquam illum
          soluta reprehenderit molestias. Quam in voluptate nemo quaerat aliquam
          repudiandae fugiat iure.
        </p>
        <button
          onClick={handleToggle}
          className="shrink-0 text-xs text-blue-500"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

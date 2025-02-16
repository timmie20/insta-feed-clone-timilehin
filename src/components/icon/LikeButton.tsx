import React from "react";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function LikeButton({
  liked,
  onToggle,
}: {
  liked: { id: number; isLiked: boolean };
  onToggle: (id: number) => void;
}) {
  return (
    <button
      className="relative flex items-center justify-center"
      aria-label={liked.isLiked ? "Unlike post" : "Like post"}
      onClick={() => onToggle(liked?.id)}
    >
      <motion.div
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: liked.isLiked ? [1, 1.3, 1] : 1,
          opacity: liked.isLiked ? 1 : 0.5,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Heart
          className="h-6 w-6"
          fill={liked.isLiked ? "red" : "transparent"}
          stroke="red"
        />
      </motion.div>
    </button>
  );
}

// import React from "react";
// import { Heart } from "lucide-react";
// import { motion } from "motion/react"; // Fix: Use 'framer-motion' instead of 'motion/react'

// type LikeButtonProps = {
//   liked: { id: number; isLiked: boolean };
//   onToggle: (id: number) => void;
// };

// export default function LikeButton({ liked, onToggle }: LikeButtonProps) {
//   return (
//     <button
//       className="relative flex items-center justify-center focus-visible:ring-1"
//       aria-label={liked.isLiked ? "Unlike post" : "Like post"}
//       onClick={() => onToggle(liked.id)}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           onToggle(liked.id);
//         }
//       }}
//     >
//       <motion.div
//         initial={{ scale: 1, opacity: 0.7 }}
//         animate={{
//           scale: liked.isLiked ? [1, 1.3, 1] : 1,
//           opacity: liked.isLiked ? 1 : 0.7,
//         }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//       >
//         <Heart
//           className={`h-6 w-6 transition-all duration-300 ${
//             liked.isLiked
//               ? "scale-110 fill-red-500 text-red-500"
//               : "fill-transparent text-gray-400"
//           }`}
//         />
//       </motion.div>

//       {/* Animated pulse effect when liked */}
//       {liked.isLiked && (
//         <span className="absolute -z-10 h-10 w-10 animate-ping rounded-full bg-red-500 opacity-50"></span>
//       )}
//     </button>
//   );
// }

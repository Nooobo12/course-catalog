"use client";

import { useState } from "react";

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="flex items-center gap-1.5 bg-[#D1495B]/10 text-[#D1495B] px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-[#D1495B]/25 transition-colors cursor-pointer"
    >
      <span>❤</span>
      <span>{likes} likes</span>
    </button>
  );
}
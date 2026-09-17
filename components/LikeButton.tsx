"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
  <button className="bg-brand-coral/10 text-brand-coral px-4 py-2 rounded-lg font-medium hover:bg-brand-coral/20">
  <span>❤</span>
  <span>{likes}</span>
</button>
  );
}
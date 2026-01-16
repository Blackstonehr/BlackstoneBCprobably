import { Star } from "lucide-react";
import * as React from "react";

type StarRatingProps = {
  rating: number; // 0–5
};

export const StarRating = ({ rating }: StarRatingProps) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

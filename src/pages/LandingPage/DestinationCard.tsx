import React from "react";

interface DestinationCardProps {
  city: string;
  description: string;
  price: number;
  imageUrl: string;
}

function DestinationCard({
  city,
  description,
  price,
  imageUrl,
}: DestinationCardProps) {
  return (
    <article
      className="overflow-hidden relative rounded-xl h-[400px] text-white"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="mb-1 text-2xl font-semibold">{city}</h3>
        <p className="mb-3 text-sm">{description}</p>
        <p className="mb-4 text-xl font-semibold">$ {price}</p>
        <button className="px-6 py-3 w-full bg-green-300 rounded cursor-pointer border-none text-zinc-900 hover:bg-green-400 transition-colors">
          Book a Hotel
        </button>
      </div>
    </article>
  );
}

export default DestinationCard;

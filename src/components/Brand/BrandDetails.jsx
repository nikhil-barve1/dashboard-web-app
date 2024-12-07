import { ArrowLeft } from "lucide-react";
import React from "react";

export default function BrandDetails({ brand, onGoBack }) {
  if (!brand) return null;

  return (
    <div className="h-full bg-[#f9f9f9] p-3">
      <h1 className="mb-4 text-2xl font-semibold">Brand Details</h1>
      <div className="space-y-6 overflow-hidden rounded-lg bg-white p-8 shadow-md">
        {/* Back Button */}
        <div className="flex justify-end">
          <button
            onClick={onGoBack}
            className="flex items-center justify-center gap-1 rounded-xl border border-[#4b69ff] bg-white px-3 py-1.5 text-[#4b69ff] duration-200 hover:bg-[#4b69ff] hover:text-white"
          >
            <ArrowLeft size={19} />
            Go Back
          </button>
        </div>
        {/* Brand Details */}
        <div className="media1370:flex-row flex cursor-pointer flex-col gap-12 rounded-xl border border-gray-200 p-5 shadow-xl">
          {/* Brand Image */}
          <div className="rounded-xl">
            <img
              className="h-60 rounded-xl border border-gray-400 p-3 media375:h-72 md:h-96 md:w-96"
              src={brand.logoUrl}
              alt={brand.name}
            />
          </div>
          {/* Details */}
          <div className="flex flex-1 flex-col gap-8 font-semibold">
            <h1 id="title" className="text-2xl sm:text-5xl">
              {brand.name}
            </h1>
            <h2 id="category" className="text-sm sm:text-base">
              Category: {brand.category}
            </h2>
            <h3 className="text-sm sm:text-base">Description:</h3>
            <p
              id="description"
              className="text-justify text-sm sm:text-base md:w-[540px]"
            >
              {brand.description}
            </p>
            <p id="stock" className="text-sm sm:text-base">
              No. of Products Available: {brand.noOfProducts}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

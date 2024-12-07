import { ArrowLeft } from "lucide-react";
import React from "react";

export default function ProductDetails({ product, onGoBack }) {
  if (!product) return null;

  return (
    <div className="h-full bg-[#f9f9f9] p-3">
      <h1 className="mb-4 text-2xl font-semibold">Product Details</h1>
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
        {/* Product Details */}
        <div className="media1370:flex-row flex cursor-pointer flex-col gap-12 rounded-xl border border-gray-200 p-5 shadow-xl">
          {/* Product Image */}
          <div className="rounded-xl">
            <img
              className="h-60 rounded-xl border border-gray-400 p-3 media375:h-72 md:h-96 md:w-96"
              src={product.image}
              alt={product.name}
            />
          </div>
          {/* Details */}
          <div className="flex flex-1 flex-col gap-3 font-semibold">
            <h1 id="title" className="text-2xl sm:text-5xl">
              {product.name}
            </h1>
            <h2 id="brand" className="text-xl sm:text-2xl">
              Brand: {product.brand}
            </h2>
            <h2 id="price" className="text-xl sm:text-2xl">
              {product.price}
            </h2>
            <h2 id="category" className="text-sm sm:text-base">
              Category: {product.category}
            </h2>
            <h3 className="text-sm sm:text-base">Description:</h3>
            <p
              id="description"
              className="text-justify text-sm sm:text-base md:w-[540px]"
            >
              {product.description}
            </p>
            <p id="stock" className="text-sm sm:text-base">
              Stock: {product.stock}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

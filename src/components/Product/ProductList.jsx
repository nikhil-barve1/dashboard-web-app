import { PencilLine, Plus, Search, Trash2 } from "lucide-react";
import React, { useState } from "react";
import SearchBar from "../SearchBar";

export default function ProductList({
  products,
  onAddProduct,
  onEditProduct,
  onViewProductDetails,
  onDeleteProduct,
}) {
  const [query, setQuery] = useState("");
  return (
    <div className="h-full bg-[#f9f9f9] p-5">
      <h1 className="mb-4 text-2xl font-semibold">Products</h1>
      <div className="space-y-6 overflow-hidden rounded-lg bg-white p-8 shadow-md">
        <div className="flex flex-col justify-between gap-3 sm:flex-row">
          {/* SearchBar Component */}
          <SearchBar
            placeholdeText={"Search Products by name or category or brand"}
            setQuery={setQuery}
          />
          {/* Add Product Button */}
          <button
            onClick={onAddProduct}
            className="flex w-40 items-center justify-center gap-2 self-end rounded-xl border border-[#4b69ff] bg-white px-4 py-1 text-[#4b69ff] duration-200 hover:bg-[#4b69ff] hover:text-white sm:py-2"
          >
            <Plus />
            Add Product
          </button>
        </div>

        <div className="max-h-96 overflow-y-scroll">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#f9f9f9] text-zinc-600">
                <th className="border-b p-4 text-left font-semibold">#</th>
                <th className="border-b p-4 text-left font-semibold">
                  Product
                </th>
                <th className="border-b p-4 text-left font-semibold">
                  Category
                </th>
                <th className="border-b p-4 text-left font-semibold">Brand</th>
                <th className="border-b p-4 text-left font-semibold">Stock</th>
                <th className="border-b p-4 text-left font-semibold">Price</th>
                <th className="border-b p-4 text-left font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium text-black/85">
              {products
                .filter(
                  (product) =>
                    product.name.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query) ||
                    product.brand.toLowerCase().includes(query),
                )
                .map((product, index) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    {/* Serial ID */}
                    <td className="border-b p-4">{index + 1}</td>
                    {/* Product with Image */}
                    <td className="border-b p-4">
                      <div
                        title="View Product Details"
                        className="flex w-36 cursor-pointer items-center space-x-3 media1290:w-72"
                        onClick={() => onViewProductDetails(product)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 rounded object-cover"
                        />
                        <span className="text-blue-600 hover:underline">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="border-b p-4">{product.category}</td>
                    <td className="border-b p-4">{product.brand}</td>
                    <td className="border-b p-4">{product.stock}</td>
                    <td className="border-b p-4">{product.price}</td>
                    <td className="flex border-b p-4">
                      <button
                        title="Edit"
                        onClick={() => onEditProduct(product)}
                        className="mr-2 rounded-xl bg-blue-500 p-1.5 text-white hover:bg-blue-600 xl:p-2.5"
                      >
                        <PencilLine size={18} />
                      </button>
                      <button
                        title="Delete"
                        onClick={() => onDeleteProduct(product.id)}
                        className="rounded-xl bg-red-500 p-1.5 text-white hover:bg-red-600 xl:p-2.5"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

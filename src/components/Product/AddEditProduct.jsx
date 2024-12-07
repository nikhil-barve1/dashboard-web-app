import React, { useState, useEffect } from "react";

export default function AddEditProduct({ product, onSaveProduct, onGoBack }) {
  // State for form inputs
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    category: "",
    brand: "",
    image: "",
    description: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic (add or update product)

    // Basic validation
    if (
      !formData.name ||
      !formData.category ||
      !formData.brand ||
      !formData.image ||
      !formData.description ||
      !formData.price ||
      !formData.stock
    ) {
      alert("Please fill out all fields.");
      return;
    }

    onSaveProduct(formData);
  };

  return (
    <div className="h-full bg-[#f9f9f9] p-5">
      <h1 className="mb-4 text-2xl font-semibold">
        {formData.id ? "Edit Product" : "Add Product"}
      </h1>
      <form
        id="Product-form"
        className="flex flex-col gap-5 rounded-lg bg-white p-6 text-sm font-medium"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-8 sm:flex-row">
          {/* col-1 */}
          <div className="flex-1 space-y-5">
            {/* name */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="name">Name</label>
              <input
                className="rounded-lg border border-gray-300 bg-white px-4 py-2"
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {/* Category */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="category">Category</label>
              <select
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-500"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  Select Category
                </option>
                <option value="Furniture">Furniture</option>
                <option value="Men'clothing">Men's Clothing</option>
                <option value="Perfume">Perfume</option>
                <option value="Makeup">Makeup</option>
              </select>
            </div>

            {/* Brand */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="brand">Brand</label>
              <select
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-500"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  Select Brand
                </option>
                <option value="CraftFurnish">CraftFurnish</option>
                <option value="ThreadCloth">ThreadCloth</option>
                <option value="SweetFragrance">SweetFragrance</option>
              </select>
            </div>

            {/* Product Image */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="image">Product Image URL</label>
              <input
                className="rounded-lg border border-gray-300 bg-white px-4 py-2"
                type="url"
                name="image"
                id="image"
                placeholder="Product Image URL"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* col-2 */}
          <div className="flex-1 space-y-6">
            {/* Description */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="description">Description</label>
              <textarea
                rows={5}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2"
                name="description"
                id="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            {/* Price */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="price">Price</label>
              <input
                className="rounded-lg border border-gray-300 bg-white px-4 py-2"
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>

            {/* Stock */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="stock">Stock</label>
              <input
                className="rounded-lg border border-gray-300 bg-white px-4 py-2"
                type="text"
                name="stock"
                id="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onGoBack}
            type="button"
            className="rounded-xl border border-red-500 bg-white px-3 py-1.5 text-red-500 duration-200 hover:bg-red-500 hover:text-white"
          >
            Go Back to Product List
          </button>
          <button
            type="submit"
            className="rounded-xl border border-[#4b69ff] bg-white px-3 py-1.5 text-[#4b69ff] duration-200 hover:bg-[#4b69ff] hover:text-white"
          >
            {product ? "Save Changes" : "Add New Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function AddEditBrand({ brand, onSaveBrand, onGoBack }) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    logoUrl: "",
    description: "",
    category: "",
    noOfProducts: "",
  });

  useEffect(() => {
    if (brand) {
      setFormData(brand);
    }
  }, [brand]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic (add or update brand)

    // Basic validation
    if (
      !formData.name ||
      !formData.logoUrl ||
      !formData.description ||
      !formData.category ||
      !formData.noOfProducts
    ) {
      alert("Please fill out all fields.");
      return;
    }

    onSaveBrand(formData);
  };

  return (
    <div className="h-full bg-[#f9f9f9] p-5">
      <h1 className="mb-4 text-2xl font-semibold">
        {brand ? "Edit Brand" : "Add Brand"}
      </h1>
      <form
        id="Brand-form"
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
                placeholder="Brand Name"
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

            {/* Brand Logo Image */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="logoUrl">Brand Logo Image</label>
              <input
                className="rounded-lg border border-gray-300 bg-white px-4 py-2"
                type="url"
                name="logoUrl"
                id="logoUrl"
                placeholder="Brand Logo Image URL"
                value={formData.logoUrl}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* col-2 */}
          <div className="flex-1 space-y-7">
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

            {/* No. of Products */}
            <div id="input-container" className="flex flex-col gap-2.5">
              <label htmlFor="noOfProducts">No. of Products</label>
              <input
                className="rounded-lg border border-gray-300 bg-white px-4 py-2"
                type="text"
                name="noOfProducts"
                id="noOfProducts"
                placeholder="No. of products"
                value={formData.noOfProducts}
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
            Go Back to Brand List
          </button>
          <button
            type="submit"
            className="rounded-xl border border-[#4b69ff] bg-white px-3 py-1.5 text-[#4b69ff] duration-200 hover:bg-[#4b69ff] hover:text-white"
          >
            {brand ? "Save Changes" : "Add New Brand"}
          </button>
        </div>
      </form>
    </div>
  );
}

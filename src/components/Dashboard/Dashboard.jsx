import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProductList from "../Product/ProductList.jsx";
import BrandList from "../Brand/BrandList.jsx";
import AddEditProduct from "../Product/AddEditProduct.jsx";
import AddEditBrand from "../Brand/AddEditBrand.jsx";
import ProductDetails from "../Product/ProductDetails.jsx";
import BrandDetails from "../Brand/BrandDetails.jsx";
import { Menu, X } from "lucide-react";
import sampleProductData from "../../data/SampleProductData.js";
import sampleBrandData from "../../data/SampleBrandData.js";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [activeSection, setActiveSection] = useState("products"); // Default section

  // product related state variables
  const [productsData, setProductsData] = useState([]);
  const [showAddEditProduct, setShowAddEditProduct] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [productDetails, setProductDetails] = useState(null);

  // Load products from localStorage and merge with sample data
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    const mergedProducts = [...sampleProductData, ...storedProducts].reduce(
      (unique, product) => {
        if (!unique.some((p) => p.id === product.id)) unique.push(product);
        return unique;
      },
      [],
    );
    setProductsData(mergedProducts);
  }, []);

  const updateProductsInStorage = (updatedProducts) => {
    const addedProducts = updatedProducts.filter(
      (product) =>
        !sampleProductData.some(
          (sampleProduct) => sampleProduct.id === product.id,
        ),
    );
    localStorage.setItem("products", JSON.stringify(addedProducts));
    setProductsData(updatedProducts);
  };

  // brand related state variables
  const [brandsData, setBrandsData] = useState([]);
  const [showAddEditBrand, setShowAddEditBrand] = useState(false);
  const [brandToEdit, setBrandToEdit] = useState(null);
  const [brandDetails, setBrandDetails] = useState(null);

  // Load brands from localStorage and merge with sample brand data
  useEffect(() => {
    const storedBrands = JSON.parse(localStorage.getItem("brands")) || [];

    const mergedBrands = [...sampleBrandData, ...storedBrands].reduce(
      (unique, brand) => {
        if (!unique.some((b) => b.id === brand.id)) unique.push(brand);
        return unique;
      },
      [],
    );
    setBrandsData(mergedBrands);
  }, []);

  const updateBrandsInStorage = (updatedBrands) => {
    const addedBrands = updatedBrands.filter(
      (brand) =>
        !sampleBrandData.some((sampleBrand) => sampleBrand.id === brand.id),
    );
    localStorage.setItem("brands", JSON.stringify(addedBrands));
    setBrandsData(updatedBrands);
  };

  const handleSelectSection = (section) => {
    setActiveSection(section);
    setShowAddEditProduct(false);
    setProductToEdit(null);
    setShowAddEditBrand(false);
    setBrandToEdit(null);
  };

  // Product Related Handlers

  const handleAddProduct = () => {
    setProductToEdit(null);
    setShowAddEditProduct(true);
    setActiveSection("products");
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowAddEditProduct(true);
    setActiveSection("products");
  };

  const handleGoBackToProductList = () => {
    setShowAddEditProduct(false);
    setActiveSection("products");
  };

  const handleViewProductDetails = (product) => {
    setProductDetails(product);
    setActiveSection("productDetails");
  };

  const handleGoBackFromProductDetails = () => {
    setProductDetails(null);
    setActiveSection("products");
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = productsData.filter(
      (product) => product.id !== productId,
    );

    updateProductsInStorage(updatedProducts);
  };

  const handleSaveProduct = (product) => {
    let updatedProducts;

    if (product.id) {
      // Update existing product
      updatedProducts = productsData.map((p) =>
        p.id === product.id ? product : p,
      );
    } else {
      // Add new product
      updatedProducts = [...productsData, { ...product, id: Date.now() }];
    }

    updateProductsInStorage(updatedProducts);
    setShowAddEditProduct(false);
  };

  // Brand Related Handlers

  const handleAddBrand = () => {
    setBrandToEdit(null);
    setShowAddEditBrand(true);
    setActiveSection("brands");
  };

  const handleEditBrand = (brand) => {
    setBrandToEdit(brand);
    setShowAddEditBrand(true);
    setActiveSection("brands");
  };

  const handleGoBackToBrandList = () => {
    setShowAddEditBrand(false);
    setActiveSection("brands");
  };

  const handleViewBrandDetails = (brand) => {
    setBrandDetails(brand);
    setActiveSection("branddetails");
  };

  const handleGoBackFromBrandDetails = () => {
    setBrandDetails(null);
    setActiveSection("brands");
  };

  const handleDeleteBrand = (brandId) => {
    const updatedBrands = brandsData.filter((brand) => brand.id !== brandId);

    updateBrandsInStorage(updatedBrands);
  };

  const handleSaveBrand = (brand) => {
    let updatedBrands;

    if (brand.id) {
      // Update existing brand
      updatedBrands = brandsData.map((b) => (b.id === brand.id ? brand : b));
    } else {
      // Add new brand
      updatedBrands = [...brandsData, { ...brand, id: Date.now() }];
    }

    updateBrandsInStorage(updatedBrands);
    setShowAddEditBrand(false);
  };

  return (
    <div className="section-container relative flex">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        isHamburgerClick={isSidebarOpen}
      />
      {/* Main content */}
      <main className="w-full">
        <button
          id="hamburger-icon"
          onClick={toggleSidebar}
          className="relative cursor-pointer p-1 lg:hidden"
        >
          {isSidebarOpen ? (
            <X
              size={34}
              className="absolute -top-4 left-20 z-50 cursor-pointer rounded-md p-1 text-gray-500 hover:bg-gray-200"
            />
          ) : (
            <Menu
              size={34}
              className="absolute -top-4 rounded-md p-1 text-gray-500 hover:bg-gray-200"
            />
          )}
        </button>
        {activeSection === "products" && (
          <>
            {showAddEditProduct ? (
              <AddEditProduct
                product={productToEdit}
                onSaveProduct={handleSaveProduct}
                onGoBack={handleGoBackToProductList}
              />
            ) : (
              <ProductList
                products={productsData}
                onAddProduct={handleAddProduct}
                onEditProduct={handleEditProduct}
                onViewProductDetails={handleViewProductDetails}
                onDeleteProduct={handleDeleteProduct}
              />
            )}
          </>
        )}
        {activeSection === "productDetails" && (
          <ProductDetails
            product={productDetails}
            onGoBack={handleGoBackFromProductDetails}
          />
        )}

        {activeSection === "brands" && (
          <>
            {showAddEditBrand ? (
              <AddEditBrand
                brand={brandToEdit}
                onSaveBrand={handleSaveBrand}
                onGoBack={handleGoBackToBrandList}
              />
            ) : (
              <BrandList
                brands={brandsData}
                onAddBrand={handleAddBrand}
                onEditBrand={handleEditBrand}
                onViewBrandDetails={handleViewBrandDetails}
                onDeleteBrand={handleDeleteBrand}
              />
            )}
          </>
        )}

        {activeSection === "branddetails" && (
          <BrandDetails
            brand={brandDetails}
            onGoBack={handleGoBackFromBrandDetails}
          />
        )}

        {activeSection === "dashboard" && (
          <div className="pt-6 text-center text-3xl">
            Welcome to Dashboard For Products and Brands Management
          </div>
        )}
      </main>
    </div>
  );
}

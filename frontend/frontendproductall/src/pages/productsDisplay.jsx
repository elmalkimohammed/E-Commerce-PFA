import React, { useState, useEffect } from "react";
import ProduitCard from "../components/produitCard";
import "./styles/produitDisplay.css";
import "./styles/ProduitCard.css";

function ProductsDisplay() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    fetch("http://localhost:5213/api/Produitlist")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // --- PAGINATION CALCULATIONS ---
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  // Slice the products manually using a loop
  const currentProducts = [];
  for (let i = firstIndex; i < lastIndex && i < products.length; i++) {
    currentProducts.push(products[i]);
  }

  // Create JSX cards manually with a loop
  const productCards = [];
  for (let i = 0; i < currentProducts.length; i++) {
    const product = currentProducts[i];
    // Extract first image from images array, or use empty string if no images
    const imageUrl = product.images && Array.isArray(product.images) && product.images.length > 0 
      ? product.images[0] 
      : '';
    productCards.push(
      <ProduitCard
        key={product.id || `product-${firstIndex + i}`}
        name={product.name}
        imageUrl={"https://picsum.photos/seed/product-" + i + "/200/200"}

        price={product.price}
      />
    );
  }

  // Total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // --- BUTTON HANDLERS ---
  function nextPage() {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  return (
    <div className="products-display">
      <h1>Products</h1>

      <div className="products-list">{productCards}</div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} / {totalPages}
        </span>

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductsDisplay;

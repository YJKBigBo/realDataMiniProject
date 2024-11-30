import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../static/styles.css";

function ItemDetail({ goodsNum }) {

  const product = {
    name: "Stylish Jacket",
    description: "A trendy jacket to keep you warm and fashionable.",
    price: "120.00",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    availability: "In Stock",
  };

  return (
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_content" className="container my-5">
          <div className="row">
            {/* Product Image */}
            <div className="col-md-6 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded"
              />
            </div>

            {/* Product Details */}
            <div className="col-md-6">
              <h1 className="mb-3">{product.name}</h1>
              <p className="text-muted">{product.description}</p>
              <h3 className="text-primary mb-3">${product.price}</h3>
              <p className="text-success">{product.availability}</p>

              {/* Action Buttons */}
              <div className="d-flex align-items-center mt-4">
                <button className="btn btn-primary me-3">Add to Cart</button>
                <button className="btn btn-outline-secondary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
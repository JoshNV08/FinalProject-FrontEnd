import React from "react";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import "../../Styles/Menu/MenuCards.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MenuSnacks() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredSnacks = products.filter((item) => item.categoryId === 2);

  return (
    <div className="container py-5 text-center">
      <div className="row">
        {filteredSnacks.map((snack) => (
          <div className="col-md-4 col-6 my-3" key={snack.id}>
            <div className="rounded-5 custom-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="text-dark d-flex justify-content-start mx-4 mt-3">
                    <h5>${snack.price}</h5>
                  </div>
                  <img
                    src={snack.photo}
                    alt={snack.name}
                    className="card-img-top"
                  />
                </div>
                <div className="card-back">
                  <h5 className="card-title">{snack.name}</h5>

                  <p>{snack.description}</p>
                  <Link
                    to={`/productmenu/${snack.id}`}
                    className="btn btn-warning rounded-4"
                  >
                    Buy Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSnacks;

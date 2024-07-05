import React from "react";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import "../../Styles/Menu/MenuCards.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MenuDrinks() {
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

  const filteredDrinks = products.filter((item) => item.categoryId === 3);

  return (
    <div className="container py-5 text-center">
      <div className="row">
        {filteredDrinks.map((drink) => (
          <div className="col-md-4 col-6 my-3" key={drink.id}>
            <div className="rounded-5 custom-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="text-dark d-flex justify-content-start mx-4 mt-3">
                    <h5>${drink.price}</h5>
                  </div>
                  <img
                    src={drink.photo}
                    alt={drink.name}
                    className="card-img-top"
                  />
                </div>
                <div className="card-back">
                  <h5 className="card-title">{drink.name}</h5>

                  <p>{drink.description}</p>
                  <Link
                    to={`/productmenu/${drink.id}`}
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

export default MenuDrinks;

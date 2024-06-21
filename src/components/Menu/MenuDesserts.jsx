import React from "react";
import { Col, Row, Card, Container, Button } from "react-bootstrap";
import "../../Styles/Menu/MenuCards.css";
import axios from "axios";
import { useEffect, useState } from "react";


function MenuDesserts() {
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

  const  FilteredDesserts = products.filter((item) => item.categoryId === 4);

  return (
    <div className="container py-5 text-center">
      <div className="row">
        {FilteredDesserts.map((dessert) => (
          <div className="col-md-4 col-6 my-3" key={dessert.id}>
            <div className="rounded-5 custom-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="text-dark d-flex justify-content-start mx-4 mt-3">
                    <h5>${dessert.price}</h5>
                  </div>
                  <img
                    src={dessert.photo}
                    alt={dessert.name}
                    className="card-img-top"
                  />
                </div>
                <div className="card-back">
                
                      <h5 className="card-title">{dessert.name}</h5>
                    
                  <p>{dessert.description}</p>
                  <a
                    href={`/productmenu/${dessert.id}`}
                    className="btn btn-warning rounded-4">
                    Buy Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuDesserts;

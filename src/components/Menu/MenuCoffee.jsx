import React from "react";
import "../../Styles/Menu/MenuCards.css";
import { useEffect, useState } from "react";
import axios from "axios";

function MenuCoffee() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

  const filteredCoffee = products.filter((item) => item.categoryId === 5);

    return (
      <div className="container py-5 text-center">
        <div className="row">
          {filteredCoffee.map((coffee) => (
            <div className="col-md-4 col-6 my-3" key={coffee.id}>
              <div className="rounded-5 custom-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="text-dark d-flex justify-content-start mx-4 mt-3">
                      <h5>${coffee.price}</h5>
                    </div>
                    <img
                      src={coffee.photo}
                      alt={coffee.name}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-back">
                  
                        <h5 className="card-title">{coffee.name}</h5>
                      
                    <p>{coffee.description}</p>
                    <a
                      href={`/productmenu/${coffee.id}`}
                      className="btn btn-warning rounded-4">
                      Agregar a Carrito
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

export default MenuCoffee;

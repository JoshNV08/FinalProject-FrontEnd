import React, { useEffect, useState } from "react";
import "../../Styles/Menu/MenuCards.css";
import { Link } from "react-router-dom";
import { supabase } from '../../../supabaseClient';

function MenuBurgers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products') 
          .select('*');  

        if (error) throw error;

        setProducts(data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredBurgers = products.filter((item) => item.categoryId === 1);

  return (
    <div className="container py-5 text-center">
      <div className="row">
        {filteredBurgers.map((burger) => (
          <div className="col-md-4 col-6 my-3" key={burger.id}>
            <div className="rounded-5 custom-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="text-dark d-flex justify-content-start mx-4 mt-3">
                    <h5>${burger.price}</h5>
                  </div>
                  <img
                    src={burger.photo}
                    alt={burger.name}
                    className="card-img-top"
                  />
                </div>
                <div className="card-back">
                  <h5 className="card-title">{burger.name}</h5>
                  <p>{burger.description}</p>
                  <Link
                    to={`/productmenu/${burger.id}`}
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

export default MenuBurgers;

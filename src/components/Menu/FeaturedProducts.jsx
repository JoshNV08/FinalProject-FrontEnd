import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from '../../../supabaseClient';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('feature', true);
        if (error) throw error;

        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error fetching featured products", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div>
      <Container className="py-5 text-center">
        <h2>Featured Products</h2>
        <Row>
          {featuredProducts.map((product) => (
            <div className="col-md-4 col-6 my-3" key={product.id}>
              <div className="rounded-5 custom-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="text-dark d-flex justify-content-start mx-4 mt-3">
                      <h5>${product.price}</h5>
                    </div>
                    <img
                      src={product.photo}
                      alt={product.name}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-back">
                    <h5 className="card-title">{product.name}</h5>

                    <p>{product.description}</p>
                    <Link
                      to={`/productmenu/${product.id}`}
                      className="btn btn-warning rounded-4"
                    >
                      Buy Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;

import React from "react";
import { useParams } from "react-router-dom";
import OneProduct from "../components/Menu/OneProduct";
import Footer from "../components/Footer/Footer";

function ProductMenu() {
    const { id } = useParams();

    return (
        <>
            <OneProduct id={id} />
            <Footer/>
        </>
    );
}

export default ProductMenu;

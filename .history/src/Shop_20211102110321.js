import React from "react";
 import { ProductsJson } from "./Data";


class Shop extends React.Component {
    render() {
        const Products = JSON.parse(ProductsJson);
        // console.log("1111");
        // console.log(Products);
        return (
            <div className="my-shop">
                <h1>My shop</h1>
                <div className="container">
                   

</div>
            </div>
        );
    }
}
export default Shop;

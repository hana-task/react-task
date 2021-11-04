import React from "react";
//import { ProductsJson } from "./Data";


class Shop extends React.Component {
    render() {
        const ProductsJson = {
            "products": [
                {
                    "name": "Cap",
                    "image": './images/cap.jpg',
                    "price": "22",
                    "description": "Very nice red cap!",
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.jpg',
                    "price": "45",
                    "description": "Warming sweater",
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.jpg',
                    "price": "55",
                    "description": "Warming sweater2",
                },
                {
                    "name": "Cap",
                    "image": './images/cap.jpg',
                    "price": "22",
                    "description": "Very nice red cap!",
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.jpg',
                    "price": "45",
                    "description": "Warming sweater",
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.jpg',
                    "price": "55",
                    "description": "Warming sweater2",
                },
            ]
        };
        var stringified = JSON.stringify(ProductsJson);

        const Products = JSON.parse(stringified);
        console.log(Products);
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
